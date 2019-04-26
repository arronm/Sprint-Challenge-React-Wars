import React from 'react';
import Character from './Character';
import './StarWars.css';

const Characters = (props) => {
  return (
      <ul className="Characters">
       {
          props.chars.length > 0
            ? props.chars.map((char, index) => (
                <Character key={index} char={char} />
              ))
            : <li className="loading">Loading</li>
       }
      </ul>
  );
}
 
export default Characters;