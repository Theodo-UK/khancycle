import React, { ListView } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import StationDetail from './StationDetail';

describe('<StationDetail />', () => {
  it('should contain a list view', () => {
    const wrapper = shallow(<StationDetail />);
    expect(wrapper.find(ListView)).to.have.length(1);
  });
});
