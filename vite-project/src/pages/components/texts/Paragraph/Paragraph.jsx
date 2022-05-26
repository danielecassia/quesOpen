import React from 'react';
import './Paragraph.scss';

export default function Paragraph(props) {
  return (
    <div className='Paragraph'>
      <p
        id={props.id}
        name={props.name}
        value={props.value}
      >{props.text}</p>
    </div>
  );
}
