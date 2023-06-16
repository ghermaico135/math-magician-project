/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import calculate from './logic/calculator';

const Buttons = ({ obj, name, setObj }) => {
  const handleClick = (e) => {
    setObj(
      calculate(obj, e.target.innerText),
    );
  };

  const operator = ['+', '-', '/', 'x', '='];
  return (

    <div
      className={`grid-item ${operator.includes(name) ? 'grid-item-color' : ''} ${(name === '0') ? 'grid-item-zero' : ''}`}
      onClick={(e) => handleClick(e)}
    >
      {name}
    </div>

  );
};
/* eslint-disable */
export default Buttons;

// Buttons.defaultProps = {
//   obj: {},
// };
Buttons.propTypes = {
  obj: PropTypes.object.isRequired,
  setObj: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
