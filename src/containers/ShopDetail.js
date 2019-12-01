import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import {getShop} from '../api'
import { useQuery } from "@apollo/react-hooks";
import ShopLogo from "../components/ShopLogo";
import Loading from "./Loading";
import Error from "./Error";
import {shopDetailTheme} from '../styles/themes'

const ShopDetail = (route) => {
  const classes = shopDetailTheme();
  const {match} = route
  const {params} = match
  const {id} = params

  const SHOP_QUERY = getShop(id)

  const {
    data: { shop = {} } = {},
    error,
    loading
  } = useQuery(SHOP_QUERY, {});

  if (error) {
    return <Error />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className={classes.root}>
      <ListSubheader style={{width: '100%', height: 30}} component="div">Search Shops > {shop.name}</ListSubheader>
        <div className="animated zoomInUp">
          <div className={classes.content}>
            <ShopLogo
              src={shop.shopLogoUrls.primaryShopLogoUrl}
              show={true}
              placeholder="/no-logo.png"/>
            <Typography className={classes.header} variant="h5" component="h3">
              {shop.name}
            </Typography>
        </div>
      </div>
    </div>
  )
}

export default ShopDetail
