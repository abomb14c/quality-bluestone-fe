import React, { Component } from 'react';
import { Link, Redirect, Switch, withRouter } from 'react-router-dom';
import { AddEmployeeForm, EmployeeWidget } from '..';
import { connect } from 'react-redux';
import { closeEmployees } from '../../actions';
import { fetchAllUsers } from '../../apiCalls/apiCalls';
import { retrieveSessionStorage } from '../../util/component-helpers/componentHelpers';
import { compose } from 'recompose';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    height: '100%',
  },
  label: {
    margin: `0 0 ${theme.spacing(3)}px 0`,
  },
});

class EmployeeFolders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      employees: [],
    };
  }

  async componentDidMount() {
    await retrieveSessionStorage('employees', this.setState.bind(this));

    if (!this.state.employees.length) {
      const employees = await fetchAllUsers();
      this.setState({ employees });
      sessionStorage.setItem('employees', JSON.stringify(employees));
    }
  }

  // displayEmployees = () => {
  //   return this.state.employees.map((employee, ind) => {
  //     return <EmployeeWidget employee={employee} key={`employee-${ind}`} />;
  //   });
  // };

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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.label}>
          employees
        </Typography>
        {/* <div className="back-nav" />
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
        )} */}
        <EmployeeWidget employees={this.state.employees} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(closeEmployees()),
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(EmployeeFolders);
