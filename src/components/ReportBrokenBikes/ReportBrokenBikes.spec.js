import React, { TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ReportBrokenBikes from './ReportBrokenBikes';

describe('<ReportBrokenBikes />', () => {
  it('should contain a touchable element', () => {
    const wrapper = shallow(<ReportBrokenBikes />);
    expect(wrapper.contains(<TouchableHighlight />));
  });
});
