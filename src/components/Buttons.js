import React from 'react';
import '../App.css';

const Buttons = (props) => {
    const {handleClick, value, customStyle} = props;
  return (
    <button onClick={handleClick} style={customStyle}>{value}</button>
  )
}

export default Buttons;