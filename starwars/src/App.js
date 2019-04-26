import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      prev: '',
      animate: '',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/'); 
  }

  getCharacters = (URL, cb) => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          ...this.state,
          starwarsChars: data.results,
          prev: data.previous,
          next: data.next,
        });
        if (cb) {
          cb();
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handlePagination(e) {
    console.log(e.target);
    const direction = e.target.getAttribute('name');
    // This is dirty but more verbose than a boolean?
    const opposite = direction === 'next' ? 'prev' : 'next';

    this.setState({
      ...this.state,
      animate: `animate-${direction}`,
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        animate: `animate-${opposite} hide`,
      });
    }, 250);

    this.getCharacters(this.state[direction], () => {
      this.setState({
        ...this.state,
        animate: `animate-${opposite}`,
      });
      
      setTimeout(() => {
        this.setState({
          ...this.state,
          animate: '',
        })  
      }, 250);
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {
          this.state.prev
            ? <span className="paginate previous" name="prev" onClick={(e) => this.handlePagination(e)}>previous</span>
            : null
        }
        <Characters chars={this.state.starwarsChars} animate={this.state.animate} />
        {
          this.state.next
            ? <span className="paginate next" name="next" onClick={(e) => this.handlePagination(e)}>next</span>
            : null
        }
      </div>
    );
  }
}

export default App;
