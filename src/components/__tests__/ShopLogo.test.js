import React from 'react';
import ShopLogo from '../ShopLogo'
import {shallow} from 'enzyme';

describe('ShopLogo', function() {
  it("Should mount", () => {
    const wrapper = shallow(<ShopLogo />);
    expect(wrapper).toHaveLength(1)
  });

  it("Should show when loaded", () => {
    const wrapper = shallow(<ShopLogo show={true} />);
    expect(wrapper).toHaveLength(1)
  });

  it("Should handle logo load", () => {
    const wrapper = shallow(<ShopLogo />);
    wrapper.instance().handleShopLogoLoad()
    expect(wrapper.state('loaded')).toEqual(true)
  });

  it("Should show placeholder", () => {
    const wrapper = shallow(<ShopLogo placeholder="test" />);
    wrapper.instance().handleShopLogoError()
    expect(wrapper.state('src')).toEqual('test')
  });
})
