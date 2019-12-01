import { makeStyles } from '@material-ui/core/styles';

const circularIndeterminateTheme = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const shopOverviewTheme = makeStyles(theme => ({
  imgZoom: {
    transform: 'scale(1)',
    transition: 'all 700ms',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all 700ms'
    },
  }
}))

const galleryTheme = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    overflow: 'hidden'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const scrollTopTheme = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

export {
  circularIndeterminateTheme,
  shopOverviewTheme,
  galleryTheme,
  scrollTopTheme
}
