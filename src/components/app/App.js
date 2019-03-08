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
              this.props.user.userId ?
                <Redirect to="/" /> :
                <SignInModal />
            )}
          />
          <Route
            exact path= "/"
            render={() => (
              !this.props.user.userId ?
                <Redirect to="/login" /> :
                <Admin />
              )}
            /> 
            <Route
              exact path= "/admin"
              render={() => (
                !this.props.user.role === 'admin' ?
                // <Redirect to = 'Admin /> :
                  <Redirect to="/home" />:
                  <Admin /> 
        
              )}
            />  
            {/* <Route
                exact path= "/newEmployee"
                component={newHire} 
            /> */}
            {/* Need to add in a route to catch all routes not caught by the switch and display 404 */}
          </div>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  birthday: state.birthday

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
