import React from 'react';
import { Header } from '..';
import { SignIn } from '../../containers';
import './signinmodal.css';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, Divider, withStyles } from '@material-ui/core';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    // margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    // height: '55%',
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
});

const SignInModal = ({ classes }) => {
  return (
    <Card className={classes.root}>
      <Header />
      <SignIn />
      <Link to="/newEmployee" className="new-link">
        <Button>new employee registration</Button>
      </Link>
      {/* <a  className="new-link"href='google.com'>New Employee Registration</a> */}
    </Card>
  );
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignInModal);
