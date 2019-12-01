import React from 'react';
import ScrollTop from '../ScrollTop'
import {shallow} from 'enzyme';

describe('ScrollTop', function() {
  it("Should load", () => {
    const wrapper = shallow(<ScrollTop />);
    expect(wrapper).toHaveLength(1)
  });
})
