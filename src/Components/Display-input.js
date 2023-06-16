/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import './Style.css';

function DisplayInput(props) {

  const handleClick = (e) => {
    if(e.target.innerText == "Ac"){
      props.setObj({
        total: null,
        next: null,
        operation: null
      }
        
      );
    }
    console.log(e.target.innerText)
  };

  return (
    <div className="grid-item-input value-input">
    {props.result.total}{props.result.operation }{props.result.next} 
    </div>
    
  );
}



export default DisplayInput;
