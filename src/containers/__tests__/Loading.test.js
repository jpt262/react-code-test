import React from 'react';
import Loading from '../Loading'
import {shallow} from 'enzyme';

describe('Loading', function() {
  it("Should load", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toHaveLength(1)
  });
})
