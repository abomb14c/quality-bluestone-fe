import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { mapDispatchToProps } from '../../containers/SignIn/SignIn';
import SignInModal from '../SignInModal/SignInModal';
import Home from '../../containers/Home/Home';
<<<<<<< HEAD
import NewHire from '../../containers/newHire/newHire';
=======
import { mapDispatchToProps } from '../../containers/SignIn/SignIn';
import NewHire from '../../containers/newHire/NewHire.js';
>>>>>>> 629ff2af96d280e0da31fa69854de2cf933160df
import {Footer} from '../Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
  }
=======

    this.state = {
      isAuthenticated: false
    };
  }


>>>>>>> 629ff2af96d280e0da31fa69854de2cf933160df
  render() {
    return (
      <div className="App">
        <Switch>
<<<<<<< HEAD
          <div className="body">     
            <Route
                exact path= "/login"
                render={() => (
                  this.props.user.user_id ?
                  <Redirect to="/" /> :
                  <SignInModal />
                )}
            />
            <Route
              exact path= "/"
              render={() => (
                !this.props.user.user_id ?
=======
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
>>>>>>> 629ff2af96d280e0da31fa69854de2cf933160df
                <Redirect to="/login" /> :
                <Home />
              )}
            />  
            <Route
                exact path= "/newEmployee"
                component={NewHire} 
            />
            {/* Need to add in a route to catch all routes not caught by the switch and display 404 */}
          </div>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  brithday: state.brithday

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
