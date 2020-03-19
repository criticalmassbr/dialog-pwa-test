import React from 'react';
import { shallow, mount } from 'enzyme';
import AlbumList from '.';
import { albums } from '../../../__mocks__/artist';

describe('AlbumList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AlbumList />);
    expect(wrapper).toBeTruthy();
  });

  it('should render the items correctly', () => {
    const wrapper = mount(<AlbumList albums={albums} />);
    expect(wrapper).toMatchSnapshot();
  });
});
