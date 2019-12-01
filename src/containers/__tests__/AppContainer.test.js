import React from 'react';
import AppContainer from '../AppContainer'
import {shallow} from 'enzyme';

describe('AppContainer', function() {
  it("Should load", () => {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper).toHaveLength(1)
  });
})
