import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

it('renders correctly', () => {
  const nav = renderer
    .create(
        <BrowserRouter>
        <Navbar/>
        </BrowserRouter>,
      )
    .toJSON();
  expect(nav).toMatchSnapshot();
});