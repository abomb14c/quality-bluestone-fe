import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
  Switch,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
} from '@material-ui/core';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { updateEmployees } from '../../actions';

const styles = theme => ({
  root: {
    padding: theme.spacing(2),
    height: '100%',
    overflow: 'scroll',
  },
  button: {
    marginBottom: theme.spacing(),
  },
  dialog: {},
  dialogContent: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

class EmployeeWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      checked: true,
    };
  }

  handleDialog = open => e => {
    this.setState({ open });
  };

  generateTableRow = () => {
    return this.props.employees.map((employee, ind) => {
      const { address, email, first_name, last_name, phone_number } = employee;
      const fullName = first_name + ' ' + last_name;
      return (
        <TableRow key={`row-${ind}`} hover>
          <TableCell>{fullName || '-'}</TableCell>
          <TableCell>{email || '-'}</TableCell>
          <TableCell>{phone_number || '-'}</TableCell>
          <TableCell>{address || '-'}</TableCell>
          <TableCell>
            <Switch
              checked={this.state.checked}
              color="primary"
              // onClick={this.handleDialog(true)}
            />
          </TableCell>
        </TableRow>
      );
    });
  };

  openEmployees = () => {
    this.props.handleEmployees();
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <>
        <Paper className={classes.root}>
          <Table>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.generateTableRow()}</TableBody>
            {/* <div className="employee-button" onClick={this.openEmployees} /> */}
          </Table>
        </Paper>
        <Dialog
          className={classes.dialog}
          open={open}
          onClose={this.handleDialog(false)}
        >
          <DialogTitle>
            Are you sure you want to deactivate this employee?
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Confirm
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
              onClick={this.handleDialog(false)}
            >
              Cancel
            </Button>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleEmployees: () => dispatch(updateEmployees()),
});

EmployeeWidget.propTypes = {
  employees: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(EmployeeWidget);
