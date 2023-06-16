/** @format */
/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./Style.css";

const DisplayInput = ({ obj }) => {
  const show = (obj) => {
    let len = Object.keys(obj).length;
    if (len == '3') {
      if (obj.operation == null && obj.next == null) {
        return obj.total;
      } else if (obj.operation && obj.next == null) {
        return obj.total + ' ' + obj.operation;
      } else if (obj.operation && obj.next && obj.total) {
        return obj.total + ' ' + obj.operation + ' ' + obj.next;
      }
    }
    if (len == '2') {
      return obj.next;
    }
  };
	return <div className="grid-item-input value-input">{show(obj) || 0}</div>;
};

DisplayInput.propTypes = {
	obj: PropTypes.object.isRequired,
};
export default DisplayInput;
