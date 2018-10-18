import React, { Component } from 'react';
import './App.css';
// import Header from '../Header/Header';
// import SignIn from '../../containers/SignIn/SignIn';
import SignInModal from '../SignInModal/SignInModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <SignInModal />
        </div>
      </div>
    );
  }
}

export default App;
