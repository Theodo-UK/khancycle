import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './Home';
import StationList from '../StationList/StationList';

describe('<Home />', () => {
  it('should contain StationList component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<StationList />)).to.equal(true);
  });
});
