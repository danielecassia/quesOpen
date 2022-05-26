import React from 'react';
import './Title.scss';

export default function Title(props) {
  return (
    <div className='Title'>
      <h1
        id={props.id}
        name={props.name}
        value={props.value}
      >{props.text}</h1>
    </div>
  );
}
