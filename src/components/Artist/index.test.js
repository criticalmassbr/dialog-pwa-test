import React from 'react';
import { shallow, mount } from 'enzyme';
import Artist from '.';
import { artist } from '../../../__mocks__/artist';

describe('Artist', () => {
  const { image, name } = artist;

  it('should render correctly', () => {
    const wrapper = shallow(<Artist image={image} name={name} />);
    expect(wrapper).toBeTruthy();
  });

  it('should render the items correctly', () => {
    const wrapper = mount(<Artist image={image} name={name} />);
    expect(wrapper).toMatchSnapshot();
  });
});
