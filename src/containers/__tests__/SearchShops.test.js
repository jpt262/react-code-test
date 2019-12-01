import React, {ReactElement} from 'react';
import 'jest-canvas-mock';
jest.mock('react-router-dom')
jest.mock('react-lottie')
import {useHistory} from 'react-router-dom'
import TablePagination from "@material-ui/core/TablePagination";
import Error from '../Error';
import Loading from '../Loading';
import mockResults from '../../__mocks__/data/results'
import mockError from '../../__mocks__/data/error'
import mockLoading from '../../__mocks__/data/loading'
import { useQuery } from "@apollo/react-hooks";
jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn()
}));

import {shallow, mount} from 'enzyme';
import SearchShops from '../SearchShops';
import ShopOverview from '../../components/ShopOverview';

describe('SearchShops', function() {
  it("Should go to next page", () => {
    useQuery.mockReturnValue(mockResults)
    let rows = 10
    let page = 7
    const hashBase = () => `#rowsPerPage=${rows}&page=${page}`
    global.window.location.hash = hashBase()
    const history = useHistory()
    const wrapper = mount(<SearchShops history={history} />);
    const nextPage = wrapper.find('button[title="Next page"]')
    nextPage.simulate('click')
    page++
    expect(history.push).toHaveBeenCalledWith(hashBase())
  });

  it("Should go to previous page", () => {
    useQuery.mockReturnValue(mockResults)
    let rows = 10
    let page = 7
    const hashBase = () => `#rowsPerPage=${rows}&page=${page}`
    global.window.location.hash = hashBase()
    const history = useHistory()
    const wrapper = mount(<SearchShops history={history} />);
    const prevPage = wrapper.find('button[title="Previous page"]')
    prevPage.simulate('click')
    page--
    expect(history.push).toHaveBeenCalledWith(hashBase())
  });

  it("Should change rows per page", () => {
    useQuery.mockReturnValue(mockResults)
    let rows = 10
    let page = 7
    const hashBase = () => `#rowsPerPage=${rows}&page=${page}`
    global.window.location.hash = hashBase()
    const history = useHistory()
    const wrapper = mount(<SearchShops history={history} />);
    const rowSelect = wrapper.find(TablePagination).at(0).props()
    rows = 25
    rowSelect.onChangeRowsPerPage({target: {value: rows}}, {key: rows})
    expect(history.push).toHaveBeenCalledWith(hashBase())
  });

  it("Should go to last page if next request is out of bounds", () => {
    useQuery.mockReturnValue(mockResults)
    let rows = 10
    let page = 149
    const hashBase = () => `#rowsPerPage=${rows}&page=${page}`
    global.window.location.hash = hashBase()
    const history = useHistory()
    const wrapper = mount(<SearchShops history={history} />);
    const rowSelect = wrapper.find(TablePagination).at(0).props()
    rows = 42
    page = 35
    rowSelect.onChangeRowsPerPage({target: {value: rows}}, {key: rows})
    expect(history.push).toHaveBeenCalledWith(hashBase())
  });

  it("Should go to last page if current request is out of bounds", () => {
    useQuery.mockReturnValue(mockResults)
    let rows = 42
    let page = 149
    const hashBase = () => `#rowsPerPage=${rows}&page=${page}`
    global.window.location.hash = hashBase()
    const history = useHistory()
    const wrapper = mount(<SearchShops history={history} />);
  })

  it("Should load results", () => {
    useQuery.mockReturnValue(mockResults)
    global.window.location.hash = ''
    const history = useHistory()
    const wrapper = shallow(<SearchShops history={history} />);
    expect(wrapper.find(ShopOverview)).toHaveLength(1);
  });

  it("Should present error page when id not valid", () => {
    useQuery.mockReturnValue(mockError)
    const wrapper = shallow(<SearchShops history={history} />);
    const error = wrapper.find(Error)
    expect(error).toHaveLength(1)
  });

  it("Should present loading page", () => {
    useQuery.mockReturnValue(mockLoading)
    const wrapper = shallow(<SearchShops history={history} />);
    const loading = wrapper.find(Loading)
    expect(loading).toHaveLength(1)
  });
});
