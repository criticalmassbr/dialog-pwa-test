import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('renders properly', () => {
  const component = <App />;
  const albumComponent = renderer.create(component);
  const tree = albumComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
