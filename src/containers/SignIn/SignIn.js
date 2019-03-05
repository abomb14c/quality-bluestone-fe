import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, updateAdmin } from '../../actions/updateUser/updateUser';
import { Auth } from 'aws-amplify';
import './signin.css';

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
    try {
<<<<<<< HEAD
      await Auth.signIn(this.state.username, this.state.password);
      handleLogin();

=======
      const response = await Auth.signIn(this.state.username, this.state.password);
      const admin = '92e6ddba-adb9-4059-be64-034e10af8e79'
      if(response.username === admin) {
      this.props.handleAdmin({userId: response.username})
      } else {
      this.props.handleLogin({userId: response.username})
  
      }
>>>>>>> 629ff2af96d280e0da31fa69854de2cf933160df
    } catch (e) {
      alert(e.message)
    }
  }

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

// LoginUser.propTypes = {
//   handleLogin: PropTypes.func
// };