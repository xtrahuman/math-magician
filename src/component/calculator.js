import React from 'react';
import calculate from '../logic/calculate';
/* eslint-disable react/prop-types */

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

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    this.setState((prev) => calculate(prev, num));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc-grid">
        <div className="show">
          <p className="lower-show">
            <span>{ total }</span>
            <span>{ operation }</span>
            <span>{ next }</span>
          </p>
        </div>
        <Buttonfunc number="AC" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="+/-" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="%" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="÷" styles handleClick={this.handleClick} />
        <Buttonfunc number="7" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="8" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="9" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="x" styles handleClick={this.handleClick} />
        <Buttonfunc number="4" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="5" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="6" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="-" styles handleClick={this.handleClick} />
        <Buttonfunc number="1" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="2" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="3" styles={false} handleClick={this.handleClick} />
        <Buttonfunc number="+" styles handleClick={this.handleClick} />
        <Buttonfunc number="0" handleClick={this.handleClick} />
        <Buttonfunc number="." handleClick={this.handleClick} />
        <Buttonfunc number="=" styles handleClick={this.handleClick} />
      </div>
    );
  }
}

export { Calculator as default };
