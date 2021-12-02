import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './Home';

it('renders correctly', () => {
  const home = renderer
    .create(
        <Home/>,
      )
    .toJSON();
  expect(home).toMatchSnapshot();
});

