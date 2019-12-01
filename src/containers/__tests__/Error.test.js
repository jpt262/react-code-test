import React from 'react';
import Error from '../Error'
import {shallow} from 'enzyme';

describe('Error', function() {
  it("Should load", () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toHaveLength(1)
  });
})
