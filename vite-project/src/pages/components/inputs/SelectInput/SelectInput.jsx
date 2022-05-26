import React, {useEffect, useState} from 'react';
import './SelectInput.scss';

import Creatable from 'react-select/creatable';
import SelectArrow from '../../../../assets/icons/select-arrow.svg';

const dropdownIndicator = (height) => {
  return (
    function drop(props) {
      return (
        <>
          <img src={SelectArrow} alt="arrow" id="dropdownindic"
            style={{height: height}}/>
        </>
      );
    }
  );
};

export default function SelectInput(props) {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const customStyles= {
    control: (styles, {isDisabled}) => ({
      backgroundColor: '#EFEFEF',
      display: 'flex',
      border: '2px solid #E0E0E0',
      boxSizing: 'border-box',
      borderRadius: '8px',
      fontSize: '1rem',
    }),
    indicatorSeparator: (styles) => ({display: 'none'}),
  };
  useEffect(() => {
    const opt = [];
    props.options.forEach((op) =>{
      opt.push({label: op, value: op});
    });
    setOptions(opt);
  }, [props.options]);

  useEffect(() => {
    if (props.selected) {
      setSelected({label: props.selected, value: props.selected});
    }
    setLoading(false);
  }, [props.selected]);

  function changeValue(event) {
    props.onChange({target: {value: event.value}});
  }

  return (
    <div className='SelectInput'>
      <label htmlFor={props.label}>{props.label}</label>
      {loading ?
        null :
        <Creatable
          options={options}
          components={{DropdownIndicator: dropdownIndicator(props.height)}}
          styles={customStyles}
          placeholder=""
          onChange={changeValue}
          defaultValue={selected}
        />
      }
    </div>
  );
}
