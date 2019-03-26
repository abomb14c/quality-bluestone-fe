import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { mapDispatchToProps } from '../../containers/SignIn/SignIn';
import SignInModal from '../SignInModal/SignInModal';
import Home from '../../containers/Home/Home';
// import newHire from '../../containers/newHire/newHire.js';
import {Footer} from '../Footer/Footer';
import Admin from '../Admin/Admin';
import UploadFiles from '../../containers/uploadFiles/uploadFiles'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <div className="body">
            <Route
              exact path= "/login"
              render={() => (
                sessionStorage.getItem('userID') ?
                  <Redirect to="/home" /> :
                  <SignInModal />
              )}
            />
              <Route
                exact path= "/admin"
                render={() => (
                  (!sessionStorage.getItem('role') === 'admin' && !sessionStorage.getItem('role') === 'accountant') ?
                  // <Redirect to = 'Admin /> :
                    <Redirect to="/home" /> :
                    <Admin /> 
                )}
              />  
              <Route
                exact path= "/upload_files"
                render={() => (
                  <UploadFiles />
                )}
              />
              <Route
                exact path='/home'
                render={() => (
                  <Home />
                )}
              />
              <Route
                exact path= "/"
                render={() => (
                  sessionStorage.getItem('userID') === null ?
                    <Redirect to="/login" /> :
                    <Redirect to="/home" />
                  )}
              /> 
              {/* { sessionStorage.getItem('userID') === null ? <SignInModal /> : <Redirect to='/home' /> }
              { sessionStorage.getItem('role') === 'admin' || sessionStorage.getItem('role') === 'accountant' ? <Redirect to='/admin'/> : <Redirect to='/home'/>} */}
            {/* Need to add in a route to catch all routes not caught by the switch and display 404 */}
          
          </div>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  folder: state.folder
});

export default withRouter(connect(mapStateToProps,null)(App));
