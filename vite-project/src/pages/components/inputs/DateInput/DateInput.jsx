import React from 'react';
import './DateInput.scss';

export default function DateInput(props) {
  return (
    <div className='DateInput'>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type='date'
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
