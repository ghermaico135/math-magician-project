import React from 'react';
import PropTypes from 'prop-types';

const DisplayInput = ({ obj }) => (!obj ? (
  <div className="grid-item-input value-input">
    <p>0</p>
  </div>
) : (
  <div className="grid-item-input value-input">
    {obj.total}
    {obj.operation}
    {obj.next}

  </div>
));

export default DisplayInput;

DisplayInput.defaultProps = {
  obj: {},
};
DisplayInput.propTypes = {
  obj: PropTypes.shape({
    total: PropTypes.string,
    operation: PropTypes.string,
    next: PropTypes.string,
  }),
};
