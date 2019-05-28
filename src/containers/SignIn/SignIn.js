import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, updateAdmin } from '../../actions/updateUser/updateUser';
import './signin.css';
import axios from 'axios';
import { apiUrl } from '../../apiCalls/apiCalls';
import {
  Card,
  Button,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    width: 400,
    margin: 'auto',
    display: 'flex',
  },
  form: {
    flexDirection: 'column',
    padding: theme.spacing.unit * 4,
    width: '100%',
    justifyContent: 'center',
  },
  textField: {
    margin: `${theme.spacing.unit * 2}px 0`,
    color: theme.palette.secondary.main,
    width: '100%',
  },
  button: {
    margin: `${theme.spacing.unit * 2}px 0`,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: theme.palette.primary.contrastText,
    letterSpacing: 0.5,
    fontWeight: 700,
  },
});

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      email: this.state.username,
      password: this.state.password,
    };
    const header_info = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    await axios
      .post(`${apiUrl}authenticate`, formData, { headers: header_info })
      .then(response => {
        // this.props.handleLogin({userId: this.state.username, apiKey: response.data.auth_token, role: response.data.role})
        this.handleSuccess(response);
      })
      .catch(error => {
        this.handleFailure(error);
      });
  };

  handleSuccess = response => {
    sessionStorage.setItem('role', response.data.role);
    sessionStorage.setItem('authToken', response.data.auth_token);
    sessionStorage.setItem('userID', this.state.username);
    this.setState({ loggedIn: true });
  };

  handleFailure = error => {
    console.log('User login failed.');
    console.log(error);
  };
  // } catch (e) {
  //   alert(e.message)
  // }

  render() {
    const { classes } = this.props;

    if (this.state.loggedIn === true) {
      return <Redirect to="/admin" />;
    }

    return (
      <Card className={classes.root}>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Typography variant="h5" className={classes.title}>
            Login
          </Typography>
          <TextField
            variant="outlined"
            className={classes.textField}
            type="text"
            name="username"
            value={this.state.username}
            label="Username"
            onChange={this.handleChange}
            color="secondary"
          />
          <TextField
            variant="outlined"
            className={classes.textField}
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            onChange={this.handleChange}
            color="secondary"
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            color="secondary"
          >
            <Typography className={classes.buttonText} variant="subtitle1">
              Login
            </Typography>
          </Button>
        </form>
      </Card>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLogin: user => dispatch(updateUser(user)),
  handleAdmin: admin => dispatch(updateAdmin(admin)),
});

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(SignIn);

// export const mapStateToProps = state => ({
//   role: state.user.role,
//   userId: state.user.userId,
//   apiKey: state.user.apiKey
// })
// LoginUser.propTypes = {
//   handleLogin: PropTypes.func
// };
