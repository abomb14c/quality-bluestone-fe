import React, { Component } from 'react';
// import Header from '../Header/Header';
// import AdminWidget from './../../containers/AdminWidget/AdminWidget';
import { AppHeader, LeftDrawer } from '..';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { EmployeeFolders, BusinessFolders } from '../../containers';
import { closeEmployees } from '../../actions';

const styles = () => ({
  content: {
    display: 'flex',
  },
});

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.handleClose();
  }

  render() {
    const { active, classes } = this.props;
    return (
      <div className="admin-container">
        <AppHeader />
        <div className={classes.content}>
          <LeftDrawer />
          <>
            {active === 'employees' && <EmployeeFolders />}
            {active === 'files' && <BusinessFolders />}
          </>
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Admin);
