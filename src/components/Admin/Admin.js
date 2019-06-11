import React, { Component } from 'react';
// import Header from '../Header/Header';
// import AdminWidget from './../../containers/AdminWidget/AdminWidget';
import {
  EmployeeWidget,
  EmployeeFolders,
  BusinessFolders,
  BusinessWidget,
} from '../../containers';
import { AppHeader } from '..';
import { connect } from 'react-redux';
import { closeEmployees } from '../../actions';
import './admin.css';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleBack = event => {
    event.preventDefault();
    this.props.handleClose();
  };

  render() {
    return (
      <div className="admin-container">
        <AppHeader />
        <div className="hero-nav">
          <div className="greeting-container">
            <h5 className="greeting-text">Joe's Dashboard</h5>
            <button onClick={this.handleBack} className="back-button">
              back
            </button>
          </div>
        </div>
        {this.props.active === '' && (
          <div className="body-container">
            {/* <AdminWidget /> */}
            <div className="folder-container">
              <EmployeeWidget />
              <BusinessWidget />
            </div>
          </div>
        )}
        {this.props.active === 'employees' && <EmployeeFolders />}
        {this.props.active === 'files' && <BusinessFolders />}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
