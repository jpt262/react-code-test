import React, {useState} from 'react';
import ShopOverview from '../components/ShopOverview'
import Pagination from '../components/Pagination'
import { useQuery } from "@apollo/react-hooks";
import {getList} from '../api'
import {interval} from 'rxjs'
import {take} from 'rxjs/operators'
import Loading from './Loading'
import Gallery from './Gallery'
import Error from './Error'

function getJsonFromUrl() {
  const url = window.location.hash;
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = parseInt(decodeURIComponent(item[1]));
  });
  return result;
}

let drawing = false

const SearchShops = ({history}) => {
  let {page = 0, rowsPerPage = 10} = getJsonFromUrl()
  const [queue, setQueue] = useState(0);

  const LIST_QUERY = getList(rowsPerPage, page * rowsPerPage)

  const animate = () => {
    if (!drawing) {
      interval(20)
        .pipe(take(shops.nodes.length))
        .subscribe(index => {
          drawing = true
          setQueue(index)
        }, () => {}, () => {
          drawing = false
        })
    }
  }

  const updateHistory = (event, rows, page) => {
    if (shops.totalCount < (page * rows)) {
      page = Math.floor((shops.totalCount) / rows)
    }
    return history.push(`#rowsPerPage=${rows}&page=${page}`)
  }

  const changeRows = (event, {key}) => updateHistory(event, key, page)
  const changePage = (event, page) => updateHistory(event, rowsPerPage, page)

  const {
    data: { shops = {} } = {},
    error,
    loading
  } = useQuery(LIST_QUERY, {});

  if(loading){
    return (
      <Loading />
    )
  }

  if (shops.totalCount < (page * rowsPerPage)) {
    page = Math.floor((shops.totalCount) / rowsPerPage)
    history.push(`#rowsPerPage=${rowsPerPage}&page=${page}`)
    return <span />
  }

  if(error){
    return (
      <Error message={error.message} />
    )
  }

  animate()

  return (
    <div>
      <Pagination
        component="nav"
        page={page}
        rowsPerPageOptions={[10,25,42]}
        rowsPerPage={rowsPerPage}
        count={shops.totalCount}
        onChangeRowsPerPage={changeRows}
        onChangePage={changePage} />
      <div>
        <Gallery>
          {shops.nodes.map((shop, index) => (
            <ShopOverview key={shop._id} {...shop} show={index <= queue} />
          ))}
        </Gallery>
      </div>
    </div>
  )
}

export default SearchShops
