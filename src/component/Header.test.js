import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

it('renders correctly', () => {
  const heading = renderer
    .create(
      <Header />,
    )
    .toJSON();
  expect(heading).toMatchSnapshot();
});
