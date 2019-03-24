import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, updateAdmin } from '../../actions/updateUser/updateUser';
import './signin.css';
import axios from 'axios'
import { apiUrl } from '../../apiCalls/apiCalls';

export class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      'email': this.state.username,
      'password': this.state.password
    }
    const header_info = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    await axios.post(`${apiUrl}authenticate`, formData, {headers: header_info}).then((response) => {
        // this.props.handleLogin({userId: this.state.username, apiKey: response.data.auth_token, role: response.data.role})
        this.handleSuccess(response)
      }).catch((error) => {
        this.handleFailure(error)
      });

   }

  handleSuccess = (response) => {
    sessionStorage.setItem('role', response.data.role);
    sessionStorage.setItem('authToken',  response.data.auth_token);
    sessionStorage.setItem('userID', this.state.username);
    this.setState({'loggedIn': true});
  }

   handleFailure = (error) => {
     console.log('User login failed.');
     console.log(error);
   }
    // } catch (e) {
    //   alert(e.message)
    // }

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to='/admin' />
    }
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h3 className="login-title">Login</h3>
        <input
          className="login-user"
          type="text"
          name="username"
          value={this.state.username}
          placeholder="username"
          onChange={this.handleChange}
        />
        <input
          className="login-user"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button className="login-button">Login</button>
      </form>
      
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLogin: (user) => dispatch(updateUser(user)),
  handleAdmin: (admin) => dispatch(updateAdmin(admin))
});


export default connect(null, mapDispatchToProps)(SignIn);

// export const mapStateToProps = state => ({
//   role: state.user.role,
//   userId: state.user.userId,
//   apiKey: state.user.apiKey
// })
// LoginUser.propTypes = {
//   handleLogin: PropTypes.func
// };