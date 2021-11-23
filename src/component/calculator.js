import React from 'react';
/* eslint-disable react/prop-types */
const Buttonfunc = ({ number }) => (
  <button type="button">{`${number}`}</button>
);

const ButtonStyle = ({ number }) => (
  <button type="button" className="style-color">{`${number}`}</button>
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
          <h1 className="lower-show">{ this.state }</h1>
        </div>
        <Buttonfunc number="AC" />
        <Buttonfunc number="+/-" />
        <Buttonfunc number="%" />
        <ButtonStyle number="/" />
        <Buttonfunc number={7} />
        <Buttonfunc number={8} />
        <Buttonfunc number={9} />
        <ButtonStyle number="x" />
        <Buttonfunc number={4} />
        <Buttonfunc number={5} />
        <Buttonfunc number={6} />
        <ButtonStyle number="-" />
        <Buttonfunc number={1} />
        <Buttonfunc number={2} />
        <Buttonfunc number={3} />
        <ButtonStyle number="+" />
        <button type="button" className="span-two">0</button>
        <Buttonfunc number="." />
        <ButtonStyle number="=" />
      </div>
    );
  }
}

export { Calculator as default };
