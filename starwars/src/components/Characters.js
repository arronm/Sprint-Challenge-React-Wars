import React from 'react';
import Character from './Character';
import './StarWars.css';

const Characters = (props) => {
  return (
      <ul className="Characters">
       {
          props.chars.map((char) => (
            <Character char={char} />
          ))
       }
      </ul>
  );
}
 
export default Characters;