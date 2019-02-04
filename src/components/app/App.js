import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SignInModal from '../SignInModal/SignInModal';
import Home from '../../containers/Home/Home';
import { mapDispatchToProps } from '../../containers/SignIn/SignIn';
import NewHire from '../../containers/newHire/NewHire';
import {Footer} from '../Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
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
                <Redirect to="/login" /> :
                <Home/>
            )}
          />  
          <Route
            exact path= "/newEmployee"
            component={NewHire} 
          />
          </div>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
