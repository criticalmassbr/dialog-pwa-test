import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../components/Search/Search';

test('renders artist cover and name', () => {
  const handleSearchMock = jest.fn(() => {});
  const component = <Search handleSearch={handleSearchMock} />;
  const searchComponent = renderer.create(component);
  const tree = searchComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
