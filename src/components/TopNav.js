import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import HideOnScroll from './HideOnScroll'

export default function TopNav(props) {
  const {history} = props
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h6"
              onClick={() => history.push('')}
              className='clickable'>
              React Code Test
              <span
                role="img"
                aria-label="tm">
                ™️
              </span>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <span id="back-to-top-anchor" />
      <Toolbar />
    </React.Fragment>
  );
}
