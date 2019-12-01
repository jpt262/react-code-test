import React from 'react';
import {shallow, mount} from 'enzyme';
import Typography from '@material-ui/core/Typography';
import ShopLogo from '../../components/ShopLogo';
import Error from '../Error';
import Loading from '../Loading';
import mockShop from '../../__mocks__/data/shop'
import mockError from '../../__mocks__/data/error'
import mockLoading from '../../__mocks__/data/loading'
import { useQuery } from "@apollo/react-hooks";
jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn()
}))
import ShopDetail from '../ShopDetail';

describe('ShopDetail', function() {
  it("Should mount", () => {
    useQuery.mockReturnValue(mockShop)
    const wrapper = shallow(<ShopDetail match={{params: {id: mockShop._id}}}/>);
    expect(wrapper).toHaveLength(1)
  });

  it("Should have name", () => {
    useQuery.mockReturnValue(mockShop)
    const wrapper = shallow(<ShopDetail match={{params: {id: mockShop.data.shop._id}}}/>);
    const name = wrapper.find(Typography)
    expect(name.text()).toEqual(mockShop.data.shop.name)
  });

  it("Should have logo", () => {
    useQuery.mockReturnValue(mockShop)
    const wrapper = shallow(<ShopDetail match={{params: {id: mockShop.data.shop._id}}}/>);
    const img = wrapper.find(ShopLogo)
    expect(img.prop('src')).toEqual(mockShop.data.shop.shopLogoUrls.primaryShopLogoUrl)
  });

  it("Should present error page when id not valid", () => {
    useQuery.mockReturnValue(mockError)

    const wrapper = shallow(<ShopDetail match={{params: {id: 1}}}/>);
    const error = wrapper.find(Error)
    expect(error).toHaveLength(1)
  });

  it("Should present loading page", () => {
    useQuery.mockReturnValue(mockLoading)

    const wrapper = shallow(<ShopDetail match={{params: {id: 1}}}/>);
    const loading = wrapper.find(Loading)
    expect(loading).toHaveLength(1)
  });
});
