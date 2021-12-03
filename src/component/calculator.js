import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const classstyle = (style, number) => {
  if (style) {
    return 'style-color';
  }

  if (number === '0') {
    return 'span-two';
  }

  return '';
};
const Buttonfunc = ({ number, styles, handleClick }) => (
  <button type="button" onClick={() => handleClick(`${number}`)} className={`${classstyle(styles, number)}`}>{`${number}`}</button>
);

Buttonfunc.propTypes = {
  number: PropTypes.string.isRequired,
  styles: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (num) => {
    setState((prev) => ({ ...prev, ...calculate(prev, num) }));
  };

  const { total, next, operation } = state;
  return (
    <div className="calc-container">
      <p>lets do some maths</p>
      <div className="calc-grid">
        <div className="show">
          <p className="lower-show" role="output">
            <span>{ total }</span>
            <span>{ operation }</span>
            <span>{ next }</span>
          </p>
        </div>
        <Buttonfunc number="AC" styles={false} handleClick={handleClick} />
        <Buttonfunc number="+/-" styles={false} handleClick={handleClick} />
        <Buttonfunc number="%" styles={false} handleClick={handleClick} />
        <Buttonfunc number="÷" styles handleClick={handleClick} />
        <Buttonfunc number="7" styles={false} handleClick={handleClick} />
        <Buttonfunc number="8" styles={false} handleClick={handleClick} />
        <Buttonfunc number="9" styles={false} handleClick={handleClick} />
        <Buttonfunc number="x" styles handleClick={handleClick} />
        <Buttonfunc number="4" styles={false} handleClick={handleClick} />
        <Buttonfunc number="5" styles={false} handleClick={handleClick} />
        <Buttonfunc number="6" styles={false} handleClick={handleClick} />
        <Buttonfunc number="-" styles handleClick={handleClick} />
        <Buttonfunc number="1" styles={false} handleClick={handleClick} />
        <Buttonfunc number="2" styles={false} handleClick={handleClick} />
        <Buttonfunc number="3" styles={false} handleClick={handleClick} />
        <Buttonfunc number="+" styles handleClick={handleClick} />
        <Buttonfunc number="0" styles={false} handleClick={handleClick} />
        <Buttonfunc number="." styles={false} handleClick={handleClick} />
        <Buttonfunc number="=" styles handleClick={handleClick} />
      </div>
    </div>
  );
};

export { Calculator as default };
