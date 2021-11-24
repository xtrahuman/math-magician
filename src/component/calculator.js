import React from 'react';
/* eslint-disable react/prop-types */
const Buttonfunc = ({ number, styles }) => (
  <button type="button" className={`${styles ? 'style-color' : ''}`}>{`${number}`}</button>
);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = 0;
  }

  render() {
    return (
      <div className="calc-grid">
        <div className="show">
          <p className="lower-show">{ this.state }</p>
        </div>
        <Buttonfunc number="AC" styles={false} />
        <Buttonfunc number="+/-" styles={false} />
        <Buttonfunc number="%" styles={false} />
        <Buttonfunc number="÷" styles />
        <Buttonfunc number={7} styles={false} />
        <Buttonfunc number={8} styles={false} />
        <Buttonfunc number={9} styles={false} />
        <Buttonfunc number="x" styles />
        <Buttonfunc number={4} styles={false} />
        <Buttonfunc number={5} styles={false} />
        <Buttonfunc number={6} styles={false} />
        <Buttonfunc number="-" styles />
        <Buttonfunc number={1} styles={false} />
        <Buttonfunc number={2} styles={false} />
        <Buttonfunc number={3} styles={false} />
        <Buttonfunc number="+" styles />
        <button type="button" className="span-two">0</button>
        <Buttonfunc number="." />
        <Buttonfunc number="=" styles />
      </div>
    );
  }
}

export { Calculator as default };
