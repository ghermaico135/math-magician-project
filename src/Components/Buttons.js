/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import calculate from './logic/calculator';

function Buttons(props) {
  const handleClick = (e) => {
    props.setObj(
      calculate(props.obj, e.target.innerText)
    );
    
  };
	
  const operator = ['+', '-', '/', 'x','='];
  return (
   
    <div 
    className={`grid-item ${operator.includes(props.name) ? `grid-item-color`:''} ${(props.name == "0") ? `grid-item-zero`:''}`}
    onClick={(e) => handleClick(e)}
    >
    {props.name}
		</div>
	
  );
}

export default Buttons;

