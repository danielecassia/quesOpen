import React from 'react';
import './GreenButton.scss';

export default function GreenButton(props) {
  return (
    <button className="GreenButton"{...props}
    >{props.text}</button>
  );
}
