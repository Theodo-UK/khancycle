import React, { Text, ListView } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import StationList from './StationList';

describe('<StationList />', () => {
  it('should contain a list view', () => {
    const wrapper = shallow(<StationList />);
    expect(wrapper.find(ListView)).to.have.length(1);
  });
});
