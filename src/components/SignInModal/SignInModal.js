import React from 'react';
import { Header } from '..';
import { SignIn } from '../../containers';
import './signinmodal.css';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card } from '@material-ui/core';

const SignInModal = () => {
  return (
    <Card className="sign-in-modal">
      <Header />
      <SignIn />
      <Link to="/newEmployee" className="new-link">
        <Button>new employee registration</Button>
      </Link>
      {/* <a  className="new-link"href='google.com'>New Employee Registration</a> */}
    </Card>
  );
};

export default withRouter(SignInModal);
