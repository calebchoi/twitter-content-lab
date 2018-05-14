import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../client/src/containers/Search';

Enzyme.configure({ adapter: new Adapter() });

// fake function searchTweets
const searchTweets = jest.fn();
// create a shallow render of Search component
const component = shallow(
    <Search searchTweets={searchTweets}/>
  );

// sample tests of the Search component

test('test initial states of the Search component' , () => {
  expect(component.state('hashtag')).toEqual('');
  expect(component.state('resultCount')).toEqual(null);
  expect(component.state('resultType')).toEqual('popular');
});

test('changes to hashtag input should set hashtag state to new value', () => {
  let input = component.find('input #hashtag');
  input.simulate('change', { target: { value: '#stephcurry', id: 'hashtag' } });
  expect(component.state('hashtag')).toEqual('#stephcurry');
});

test('changes to resultCount input should set resultCount state to new value', () => {
  let input = component.find('input #resultCount');
  input.simulate('change', { target: { value: '5', id: 'resultCount' } });
  expect(component.state('resultCount')).toEqual('5');
});

test('changes to resultType input should set resultType state to new value', () => {
  let input = component.find('#resultType');
  input.simulate('change', { target: { value: 'mixed', id: 'resultType' } });
  expect(component.state('resultType')).toEqual('mixed');
});

test('searchTweets function should be called with current states as parameters for valid hashtags', () => {
  let form = component.find('form');
  form.simulate('submit', { preventDefault: () => {} });
  expect(searchTweets).toHaveBeenCalledTimes(1);
  expect(searchTweets).toHaveBeenCalledWith('#stephcurry', '5', 'mixed');
});

test('alert should be called for invalid hashtags', () => {
  let input = component.find('input #hashtag');
  input.simulate('change', { target: { value: '#stephcurry #invalidhashtag!', id: 'hashtag' } });

  window.alert = jest.fn();
  let form = component.find('form');
  form.simulate('submit', { preventDefault: () => {} });
  expect(window.alert).toHaveBeenCalledWith("One or more hashtag input(s) invalid!");
});