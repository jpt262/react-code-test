import React from 'react';
import HideOnScroll from '../HideOnScroll'
import {shallow} from 'enzyme';

describe('HideOnScroll', function() {
  it("Should load", () => {
    const wrapper = shallow(<HideOnScroll children={<span />} />);
    expect(wrapper).toHaveLength(1)
  });
})
