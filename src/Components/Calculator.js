/** @format */
import React, { useState } from 'react';
import './Style.css';

function Calculator() {
  const [result, setResult] = useState('');
  const [isPositive, setIsPositive] = useState(true);

  const handleChange = (value) => {
    setResult(result + value);
  };

  const clearHandler = () => {
    setResult('');
    setIsPositive(true);
  };

  const toggleSignHandler = () => {
    setIsPositive(!isPositive);
    setResult((previousSign) => {
      if (isPositive) {
        return `-${previousSign}`;
      }
      return previousSign.slice(1);
    });
  };

  const handleEval = () => {
    try {
      /* eslint no-eval: 0 */
      const resultsEval = eval(result);

      setResult(resultsEval.toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item-input">
          <input
            type="text"
            className="value-input"
            id="value-input"
            value={result}
            placeholder="0"
          />
        </div>
        <button
          type="button"
          className="grid-item"
          name="Ac"
          id="clear"
          onClick={clearHandler}
        >
          Ac
        </button>
        <button type="button" className="grid-item" onClick={toggleSignHandler}>
          +/-
        </button>
        <button
          type="button"
          className="grid-item"
          onClick={() => handleChange('%')}
        >
          %
        </button>
        <button
          type="button"
          className="grid-item grid-item-color"
          name="/"
          onClick={() => handleChange('/')}
        >
          /
        </button>
        <button
          type="button"
          className="grid-item"
          name="7"
          onClick={() => handleChange('7')}
        >
          7
        </button>
        <button
          type="button"
          className="grid-item"
          name="8"
          onClick={() => handleChange('8')}
        >
          8
        </button>
        <button
          type="button"
          className="grid-item"
          onClick={() => handleChange('9')}
        >
          9
        </button>
        <button
          type="button"
          className="grid-item grid-item-color"
          onClick={() => handleChange('*')}
        >
          x
        </button>
        <button
          type="button"
          className="grid-item"
          onClick={() => handleChange('4')}
        >
          4
        </button>
        <button
          type="button"
          className="grid-item"
          name="5"
          onClick={() => handleChange('5')}
        >
          5
        </button>
        <button
          type="button"
          className="grid-item"
          name="6"
          onClick={() => handleChange('6')}
        >
          6
        </button>
        <button
          type="button"
          className="grid-item grid-item-color"
          name="-"
          onClick={() => handleChange('-')}
        >
          -
        </button>
        <button
          type="button"
          className="grid-item"
          name="1"
          onClick={() => handleChange('1')}
        >
          1
        </button>
        <button
          type="button"
          className="grid-item"
          onClick={() => handleChange('2')}
        >
          2
        </button>
        <button
          type="button"
          className="grid-item"
          onClick={() => handleChange('3')}
        >
          3
        </button>
        <button
          type="button"
          className="grid-item grid-item-color"
          onClick={() => handleChange('+')}
        >
          +
        </button>
        <button
          type="button"
          className="grid-item-zero grid-item"
          onClick={() => handleChange('0')}
        >
          0
        </button>
        <button
          type="button"
          className="grid-item"
          name="."
          onClick={() => handleChange('.')}
        >
          .
        </button>
        <button
          type="button"
          className="grid-item grid-item-color"
          name="="
          onClick={handleEval}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
