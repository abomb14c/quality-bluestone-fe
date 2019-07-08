import React, { Component } from 'react';
// import Header from '../Header/Header';
// import AdminWidget from './../../containers/AdminWidget/AdminWidget';
import { AppHeader, LeftDrawer } from '..';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import {
  EmployeeFolders,
  BusinessFolders,
  AddEmployeeForm,
} from '../../containers';
import { closeEmployees } from '../../actions';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  container: {
    padding: theme.spacing.unit * 5,
    width: '100%',
    height: '100%',
    // background: 'black',
    // overflow: 'scroll',
  },
});

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { active, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppHeader />
        <div className={classes.content}>
          <LeftDrawer />
          <div className={classes.container}>
            {active === 'employees' && <EmployeeFolders />}
            {active === 'files' && <BusinessFolders />}
            {active === 'addEmployee' && <AddEmployeeForm />}
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  active: state.active,
});

export const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(closeEmployees()),
});

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Admin);
