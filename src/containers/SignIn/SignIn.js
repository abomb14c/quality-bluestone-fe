import React, { Component } from 'react';
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
      password: ''
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
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'email': this.state.username,
      'password': this.state.password
    };
    await axios.post(`${apiUrl}` + `authenticate`, {headers: headers}).then((response) => {
        // this.props.handleLogin({userId: this.state.username, apiKey: response.data.auth_token, role: response.data.role})
        this.handleSuccess(response)
      }).catch((error) => {
        this.handleFailure()
      });

   }

  handleSuccess = (response) => {
    sessionStorage.setItem('role', response.role)
    sessionStorage.setItem('auth-token',  response.data.auth_token)
    sessionStorage.setItem('userID', this.state.username)
    console.log(sessionStorage.getItem('auth-token'))
  }

   handleFailure = () => {
     console.log('User login failed.')
   }
    // } catch (e) {
    //   alert(e.message)
    // }

  render() {
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