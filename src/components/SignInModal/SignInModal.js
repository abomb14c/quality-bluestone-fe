import React from 'react';
import Header from '../Header/Header';
import SignIn from '../../containers/SignIn/SignIn';
import './signinmodal.css';
import { Link } from 'react-router-dom';

const SignInModal = () => {
  return (
      <div className="overlay">
      <div className="sign-in-modal">
        <Header />
        <SignIn />
        <p>
          <Link 
            to="/newEmployee"
            className="new-link"
          >
          New Employee Registration
          </Link>
        </p>
        {/* <a  className="new-link"href='google.com'>New Employee Registration</a> */}
      </div>
      </div>
  )
}

export default SignInModal;