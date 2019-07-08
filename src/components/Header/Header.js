import React from 'react';
import logoGif from '../../assets/qualitybluestone.gif';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    height: 80,
    margin: `${theme.spacing(2)}px 0`,
  },
  logo: {
    height: '100%',
    width: '240px',
  },
});

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logoGif} />
    </div>
  );
};

export default withStyles(styles)(Header);
