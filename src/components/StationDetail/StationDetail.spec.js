import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import StationDetail from './StationDetail';

describe('<StationDetail />', () => {
  it('should be blank', () => {
    const wrapper = shallow(<StationDetail />);
    expect(wrapper.node === null);
  });
});
