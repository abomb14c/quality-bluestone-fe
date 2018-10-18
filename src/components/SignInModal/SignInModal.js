import React from 'react';
import Header from '../Header/Header';
import SignIn from '../../containers/SignIn/SignIn';
import './signinmodal.css';

const SignInModal = () => {
  return (
      <div className="overlay">
      <div className="sign-in-modal">
        <Header />
        <SignIn />
        <a  className="new-link"href='google.com'>New Employee Registration</a>
      </div>
      </div>
  )
}

export default SignInModal;