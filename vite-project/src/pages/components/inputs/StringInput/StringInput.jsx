import React from 'react';
import './StringInput.scss';

export default function StringInput(props) {
  return (
    <div className='StringInput'>
      <label htmlFor="name">{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
