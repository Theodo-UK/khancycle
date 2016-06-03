import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import StationDetail from './StationDetail';

describe('<StationDetail />', () => {
  it('should contain the number of free bikes', () => {
    const wrapper = shallow(<StationDetail />);
    expect(wrapper.node === null);
  });
  it('should contain the number of empty slots', () => {
    const wrapper = shallow(<StationDetail />);
    expect(wrapper.node === null);
  });
});
