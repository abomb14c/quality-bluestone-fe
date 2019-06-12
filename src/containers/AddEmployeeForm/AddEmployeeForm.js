import React, { Component } from 'react';
import { apiUrl } from '../../apiCalls/apiCalls';
import axios from 'axios';
import { TextField } from '@material-ui/core';

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
      role: 'Worker',
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
    return (
      <div className="add-employee-form-container">
        <form className="add-employee-form" onSubmit={this.handleSubmit}>
          <label>Add A New User</label>
          <div className="add-user-name-container">
            <TextField
              variant="outlined"
              className="add-user-name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              label="First Name"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              className="add-user-name"
              type="text"
              name="lastName"
              value={this.state.lastName}
              label="Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="add-user-address-container">
            <TextField
              variant="outlined"
              className="add-user-address"
              type="text"
              name="address"
              value={this.state.address}
              label="Address"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              className="add-user-city"
              type="text"
              name="city"
              value={this.state.city}
              label="City"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              className="add-user-state"
              type="text"
              name="state"
              value={this.state.state}
              label="State"
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              className="add-user-zip"
              type="text"
              name="zip"
              value={this.state.zip}
              label="Zip Code"
              onChange={this.handleChange}
            />
          </div>
          <TextField
            variant="outlined"
            className="add-user-phone"
            type="text"
            name="phone"
            value={this.state.phone}
            label="Phone Number"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            className="add-user-email"
            type="text"
            name="email"
            value={this.state.email}
            label="Email"
            onChange={this.handleChange}
          />
          <select className="select-role">
            <option defaultValue={this.state.role}>Worker</option>
            <option value={this.state.role}>Driver</option>
            <option value={this.state.role}>Accountant</option>
            <option value={this.state.role}>Admin</option>
          </select>
          <button className="submit-new-employee">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default AddEmployeeForm;

// export const mapStateToProps = state => ({
//   role: state.user.role,
//   userId: state.user.userId,
//   apiKey: state.user.apiKey
// })
