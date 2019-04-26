import React from 'react';
import Character from './Character';

const Characters = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
       {
          props.chars.map((char) => (
            <Character char={char} />
          ))
       }
      </ul>
    </div>
  );
}
 
export default Characters;