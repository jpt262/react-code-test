import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {circularIndeterminateTheme} from '../styles/themes'

export default function CircularIndeterminate() {
  const classes = circularIndeterminateTheme();

  return (
    <div className={classes.root}>
      <CircularProgress size={250} />
    </div>
  );
}
