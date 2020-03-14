import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Artist from '../components/Artist/Artist';

test('renders artist image and name', () => {
  const component = <Artist name="Test" image="teste.jpg" />;
  const artistComponent = renderer.create(component);
  const tree = artistComponent.toJSON();
  expect(tree).toMatchSnapshot();

  const renderResult = render(component);
  const artistImage = renderResult.getByAltText(/artist/i);
  expect(artistImage).toBeInTheDocument();
  const artistName = renderResult.getByTitle(/artist name/i);
  expect(artistName).toBeInTheDocument();
});
