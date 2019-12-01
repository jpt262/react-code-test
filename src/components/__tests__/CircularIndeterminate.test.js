import React from 'react';
import CircularIndeterminate from '../CircularIndeterminate'
import {shallow} from 'enzyme';

describe('CircularIndeterminate', function() {
  it("Should load", () => {
    const wrapper = shallow(<CircularIndeterminate />);
    expect(wrapper).toHaveLength(1)
  });
})
