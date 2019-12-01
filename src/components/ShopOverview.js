import React from 'react';
import ShopLogo from "./ShopLogo";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridListTile from '@material-ui/core/GridListTile';
import {shopOverviewTheme} from '../styles/themes'

const ShopOverview = (shop) => {
    const animation = 'bounceInUp';
    const classes = shopOverviewTheme();
    return (
        <div className={shop.show === true ? `animated ${animation}` : 'hidden'}>
          <GridListTile>
            <div>
              <ShopLogo
                src={shop.shopLogoUrls.primaryShopLogoUrl}
                placeholder="/no-logo.png"
                zoomEffect={classes.imgZoom}
                show={shop.show}/>
            </div>
            <GridListTileBar
              title={shop.name}
              actionIcon={
                <IconButton aria-label={`info about ${shop.name}`} className={classes.actionIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </div>
    )
}

export default ShopOverview
