import React from 'react';
import { AppBar, withStyles, Toolbar } from '@material-ui/core';
import logoGif from '../../assets/qualitybluestone.gif';

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'white',
  },
  filler: {
    height: theme.overrides.MuiAppBar.root.height,
  },
  logo: {
    height: '100%',
    width: '203px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const AppHeader = ({ classes }) => {
  return (
    <>
      <div className={classes.filler} />
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img className={classes.logo} src={logoGif} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withStyles(styles)(AppHeader);
