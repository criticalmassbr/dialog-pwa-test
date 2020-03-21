import React from 'react';
import { shallow, mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import Home from '.';
import { artistMock, errorMock, emptyMock } from '../../../__mocks__/artist';
import event from '../../../__mocks__/event';
import { Input, Form } from '../../components/SearchForm/style';
import Artist from '../../components/Artist';
import { Message } from './style';
import AlbumListItem from '../../components/AlbumListItem';
import AlbumList from '../../components/AlbumList';

// https://github.com/wesbos/waait/blob/master/index.js
export function wait(amount = 0) {
  return new Promise(resolve => setTimeout(resolve, amount));
}

// Use this in your test after mounting if you need just need to let the query finish without updating the wrapper
export async function actWait(amount = 0) {
  await act(async () => {
    await wait(amount);
  });
}

// Use this in your test after mounting if you want the query to finish and update the wrapper
export async function updateWrapper(wrapper, amount = 0) {
  await act(async () => {
    await wait(amount);
    wrapper.update();
  });
}

describe('Home', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeTruthy();
  });

  it('should render the artist data and album list', async () => {
    const value = 'Thin Lizzy';
    const wrapper = mount(
      <MockedProvider mocks={[artistMock()]} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    expect(wrapper.find(Message)).toHaveLength(0);

    wrapper.find(Input).simulate('change', { ...event });
    wrapper.find(Form).simulate('submit', event);

    await actWait();

    expect(wrapper.find(Message)).toHaveLength(0);

    wrapper.find(Input).simulate('change', { ...event, target: { value } });
    wrapper.find(Form).simulate('submit', event);

    await actWait();

    expect(wrapper.find(Message)).toHaveLength(1);
    expect(wrapper.find(Message).text()).toEqual('Loading...');

    await updateWrapper(wrapper);

    expect(wrapper.find(Artist)).toHaveLength(1);
    expect(wrapper.find(Artist).text()).toEqual(value);

    expect(wrapper.find(AlbumList)).toHaveLength(1);
    expect(wrapper.find(AlbumListItem)).toHaveLength(2);
  });

  it('should render the error message', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[errorMock()]} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    wrapper.find(Input).simulate('change', { ...event, target: { value: 'ABCDEF' } });
    wrapper.find(Form).simulate('submit', event);

    await updateWrapper(wrapper);

    expect(wrapper.find(Message)).toHaveLength(1);
    expect(wrapper.find(Message).text()).toEqual('Network error: Error');
  });

  it('should render the not found message', async () => {
    const value = 'ABCDEF';
    const wrapper = mount(
      <MockedProvider mocks={[emptyMock()]} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    wrapper.find(Input).simulate('change', { ...event, target: { value } });
    wrapper.find(Form).simulate('submit', event);

    await updateWrapper(wrapper);

    expect(wrapper.find(Message)).toHaveLength(1);
    expect(wrapper.find(Message).text()).toEqual(`No results found for "${value}"`);
  });
});
