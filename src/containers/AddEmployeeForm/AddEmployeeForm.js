import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { stateAbbreviations } from '../../util/component-helpers/componentHelpers';
import { apiUrl } from '../../apiCalls/apiCalls';

const styles = theme => ({
  root: {
    margin: 'auto',
    padding: theme.spacing(2),
  },
  button: {
    margin: `${theme.spacing(2)}px ${theme.spacing()}px`,
    transition: '0.5s',
  },
  buttonText: {
    color: theme.palette.primary.contrastText,
    letterSpacing: 0.5,
    fontWeight: 700,
  },
  divider: {
    // margin: `${theme.spacing(2)}px 0`,
    margin: theme.spacing(2),
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
  subTitle: {
    marginTop: theme.spacing(2),
  },
  textField: {
    margin: `0 ${theme.spacing()}px`,
    minWidth: 120,
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
      role: '',
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

  createStateOptions = () => {
    return stateAbbreviations.map(state => {
      return <MenuItem value={state}>{state}</MenuItem>;
    });
  };

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
            <Typography className={classes.subTitle}>1 - name</Typography>
            <Divider className={classes.divider} />
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
            <Typography className={classes.subTitle}>2 - address</Typography>
            <Divider className={classes.divider} />
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
                select
                className={classes.textField}
                type="text"
                name="state"
                value={state}
                label="State"
                onChange={this.handleChange}
              >
                {this.createStateOptions()}
              </TextField>
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
            <Typography className={classes.subTitle}>
              3 - contact info
            </Typography>
            <Divider className={classes.divider} />
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
              <TextField
                select
                className={classes.textField}
                onChange={this.handleChange}
                name="role"
                value={role}
                variant="outlined"
                input={<OutlinedInput name="role" />}
                label="Role"
              >
                <MenuItem value="worker">Worker</MenuItem>
                <MenuItem value="driver">Driver</MenuItem>
                <MenuItem value="accountant">Accountant</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </TextField>
            </div>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.button}
              disabled={this.state.disabled}
            >
              <Typography className={classes.buttonText} variant="subtitle1">
                Add Employee
              </Typography>
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
