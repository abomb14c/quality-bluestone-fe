import React, { Component } from 'react';
import './employee-folder.css';
import { Link, Redirect, Switch, withRouter } from 'react-router-dom';
import { AddEmployeeForm } from '..';
import { connect } from 'react-redux';
import { closeEmployees } from '../../actions/updateAdmin/updateAdmin';

class EmployeeFolders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  handleBack = event => {
    event.preventDefault();
    this.props.handleClose();
  };

  render() {
    return (
      <div className="employee-container">
        <div className="back-nav" />
        {this.state.active === false && (
          <div className="add-employee">
            <h5 className="add-employee-title">Add Employee</h5>
            <div className="employee-button" onClick={this.handleClick} />
          </div>
        )}
        {this.state.active === true && (
          <div className="add-employee-form-container-1">
            <button
              className="employee-form-cancel-button"
              onClick={this.handleClick}
            >
              X
            </button>
            <AddEmployeeForm />
          </div>
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(closeEmployees()),
});

export default connect(
  null,
  mapDispatchToProps
)(EmployeeFolders);
