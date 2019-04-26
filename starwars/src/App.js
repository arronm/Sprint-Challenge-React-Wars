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
    };
    this.handlePagination = this.handlePagination.bind(this);
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/'); 
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
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
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handlePagination(e) {
    this.getCharacters(this.state[e.target.getAttribute('name')]);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {
          this.state.prev
            ? <span className="paginate previous" name="prev" onClick={this.handlePagination}>previous</span>
            : null
        }
        <Characters chars={this.state.starwarsChars} />
        {
          this.state.next
            ? <span className="paginate next" name="next" onClick={this.handlePagination}>next</span>
            : null
        }
      </div>
    );
  }
}

export default App;
