/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import './Style.css';

function DisplayInput(props) {
let obj=props.result

  if (obj === undefined || obj === null) {
    return null; // or return an appropriate fallback component
  } else {
    const show = (obj) => {
      let len = Object.keys(obj).length;
      if (len == "3") {
        if (obj.operation == null && obj.next == null) {
          return obj.total;
        } else if (obj.operation && obj.next == null) {
          return obj.total + " " + obj.operation;
        } else if (obj.operation && obj.next && obj.total) {
          return obj.total + " " + obj.operation + " " + obj.next;
        }
      }
      if (len == "2") {
        return obj.next;
      }
}
  }

  return (
    <div className="grid-item-input value-input">
      {show() || 0}
    </div>
    
  );
}
export default DisplayInput;
