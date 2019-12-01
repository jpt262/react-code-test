import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import {galleryTheme} from '../styles/themes'

const useStyles = makeStyles(galleryTheme);

export default function Gallery({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
          <ListSubheader component="div">Search Shops</ListSubheader>
        </GridListTile>
        {children}
      </GridList>
    </div>
  );
}
