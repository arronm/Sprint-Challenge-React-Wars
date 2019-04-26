import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <li className="Character">
      {props.char.name}
    </li>
  );
}
 
export default Character;