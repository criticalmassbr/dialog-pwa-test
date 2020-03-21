import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '.';
import { Input, Form } from './style';
import event from '../../../__mocks__/event';

describe('SearchForm', () => {
  const onSubmit = jest.fn();
  const onSearch = jest.fn();

  it('should render correctly', () => {
    const wrapper = shallow(<SearchForm onSearchUpdate={onSearch} search="" onSubmit={onSubmit} />);
    expect(wrapper).toBeTruthy();
  });

  it('should call the correct functions', () => {
    const wrapper = shallow(<SearchForm onSearchUpdate={onSearch} search="" onSubmit={onSubmit} />);

    const input = wrapper.find(Input);
    input.simulate('change', event);

    expect(onSearch).toHaveBeenCalled();

    const form = wrapper.find(Form);
    form.simulate('submit', event);

    expect(onSubmit).toHaveBeenCalled();
  });
});
