import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

it('renders correctly', () => {
  const quotes = renderer
    .create(
        <Quotes/>,
      )
    .toJSON();
  expect(quotes).toMatchSnapshot();
});