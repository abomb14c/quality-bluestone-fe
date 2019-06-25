import React, { Component } from 'react';
import { apiUrl } from '../../apiCalls/apiCalls';
import axios from 'axios';
import {
  Button,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    margin: 'auto',
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'cemter',
  },
  inputContainer: {
    margin: `${theme.spacing()}px 0`,
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    margin: `0 0 ${theme.spacing(2)}px 0`,
  },
  select: {
    margin: `0 ${theme.spacing()}px`,
  },
  textField: {
    margin: `0 ${theme.spacing()}px`,
  },
});

class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
      role: 'worker',
      disabled: true,
    };
  }

  handleChange = async event => {
    const { name, value } = event.target;
    await this.setState({
      [name]: value,
    });
    this.toggleButton();
  };

  toggleButton = () => {
    const stateValues = Object.values(this.state);
    if (stateValues.includes('')) {
      this.setState({
        disabled: true,
      });
    } else {
      this.setState({
        disabled: false,
      });
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      city: this.state.city,
      street: this.state.address,
      state: this.state.state,
      zip_code: this.state.zip,
      phone_number: this.state.phone,
      role: this.state.role.toLowerCase(),
    };
    const header_info = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Token': sessionStorage.getItem('authToken'),
    };
    await axios
      .post(`${apiUrl}create_user`, formData, { headers: header_info })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  cancelForm = () => {};

  render() {
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phone,
      email,
      role,
    } = this.state;
    const { classes } = this.props;

    return (
      <>
        <Typography variant="h6" className={classes.label}>
          add employee
        </Typography>
        <Paper className={classes.root}>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <Typography className={classes.subTitle}>Name</Typography>
            <div className={classes.inputContainer}>
              <TextField
                variant="outlined"
                className={classes.textField}
                type="text"
                name="firstName"
                value={firstName}
                label="First Name"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                className={classes.textField}
                type="text"
                name="lastName"
                value={lastName}
                label="Last Name"
                onChange={this.handleChange}
              />
            </div>
            <Typography className={classes.subTitle}>Address</Typography>
            <div className={classes.inputContainer}>
              <TextField
                variant="outlined"
                className={classes.textField}
                type="text"
                name="address"
                value={address}
                label="Address"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                className={classes.textField}
                type="text"
                name="city"
                value={city}
                label="City"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                className={classes.textField}
                type="text"
                name="state"
                value={state}
                label="State"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                className={classes.textField}
                type="text"
                name="zip"
                value={zip}
                label="Zip Code"
                onChange={this.handleChange}
              />
            </div>
            <Typography className={classes.subTitle}>Contact Info</Typography>
            <div className={classes.inputContainer}>
              <TextField
                variant="outlined"
                className={classes.textField}
                type="text"
                name="phone"
                value={phone}
                label="Phone Number"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                className={classes.textField}
                type="text"
                name="email"
                value={email}
                label="Email"
                onChange={this.handleChange}
              />
              <Select
                className={classes.select}
                onChange={this.handleChange}
                name="role"
                value={role}
                input={<OutlinedInput name="role" />}
              >
                <MenuItem value="worker">Worker</MenuItem>
                <MenuItem value="driver">Driver</MenuItem>
                <MenuItem value="accountant">Accountant</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </div>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.button}
              disabled={this.state.disabled}
            >
              Add Employee
            </Button>
          </form>
        </Paper>
      </>
    );
  }
}

export default withStyles(styles)(AddEmployeeForm);

// export const mapStateToProps = state => ({
//   role: state.user.role,
//   userId: state.user.userId,
//   apiKey: state.user.apiKey
// })
