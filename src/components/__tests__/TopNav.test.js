import React from 'react';
import TopNav from '../TopNav'
import {shallow} from 'enzyme';

describe('TopNav', function() {
  it("Should load", () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper).toHaveLength(1)
  });
})
