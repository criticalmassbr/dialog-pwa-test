import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Album from '../components/Album';

test('renders artist cover and name', () => {
  const component = <Album id="1" name="Test" image="teste.jpg" />;
  const albumComponent = renderer.create(component);
  const tree = albumComponent.toJSON();
  expect(tree).toMatchSnapshot();

  const renderResult = render(component);
  const artistImage = renderResult.getByAltText(/album cover/i);
  expect(artistImage).toBeInTheDocument();
  const artistName = renderResult.getByTitle(/album name/i);
  expect(artistName).toBeInTheDocument();
});
