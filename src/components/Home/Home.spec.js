import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './Home';

describe('<Home />', () => {
  it('should be blank', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Text).first().props().children).to.equal('Hello!');
  });
});
