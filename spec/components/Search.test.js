import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../client/src/containers/Search';

Enzyme.configure({ adapter: new Adapter() });

const component = shallow(
    <Search searchTweets={() => {}}/>
  );

test('isHashtagValid should return false for invalid hastags', () => {
  expect(Search.isHashtagValid('#hello&')).toEqual(false);
});

test('isHashtagValid should return true for valid hastags', () => {
  expect(Search.isHashtagValid('#stephcurry #warriors')).toEqual(true);
});
