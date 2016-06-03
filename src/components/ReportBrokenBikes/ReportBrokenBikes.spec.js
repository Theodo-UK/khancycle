import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ReportBrokenBikes from './ReportBrokenBikes';

describe('<ReportBrokenBikes />', () => {
  it('should be blank', () => {
    const wrapper = shallow(<ReportBrokenBikes />);
    expect(wrapper.node === null);
  });
});
