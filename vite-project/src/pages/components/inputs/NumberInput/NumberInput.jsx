import React from 'react';
import './NumberInput.scss';

export default function NumberInput(props) {
  return (
    <div className='NumberInput'>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type='number'
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
