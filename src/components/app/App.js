import React, { Component } from 'react';
// import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';

import { Home, UploadFiles, OpenFolder } from '../../containers';
import { Admin, SignInModal } from '..';

const styles = theme => ({
  app: {
    minHeight: '100vh',
    background: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <Switch>
          <Route
            exact
            path="/login"
            render={() =>
              sessionStorage.getItem('userID') ? (
                <Redirect to="/home" />
              ) : (
                <SignInModal />
              )
            }
          />
          <Route
            exact
            path="/admin"
            render={() =>
              !sessionStorage.getItem('role') === 'admin' &&
              !sessionStorage.getItem('role') === 'accountant' ? (
                // <Redirect to = 'Admin /> :
                <Redirect to="/home" />
              ) : (
                <Admin />
              )
            }
          />
          <Route exact path="/upload_files" render={() => <UploadFiles />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route
            exact
            path="/"
            render={() =>
              sessionStorage.getItem('userID') === null ? (
                <Redirect to="/login" />
              ) : (
                <Redirect to="/home" />
              )
            }
          />
          {/* { sessionStorage.getItem('userID') === null ? <SignInModal /> : <Redirect to='/home' /> }
              { sessionStorage.getItem('role') === 'admin' || sessionStorage.getItem('role') === 'accountant' ? <Redirect to='/admin'/> : <Redirect to='/home'/>} */}
          {/* Need to add in a route to catch all routes not caught by the switch and display 404 */}
          <Route exact path="/open-folder" component={OpenFolder} />
          {/* <Route
            exact path= "/open-folder"
            render={() => (
              this.props.folder.length ?
              <Redirect to="/admin" /> :
              <OpenFolder /> 
            )} */}
          {/* /> */}
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  folder: state.folder,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  withStyles(styles)
)(App);
