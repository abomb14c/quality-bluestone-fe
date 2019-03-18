import React, {Component} from 'react';
import './add-employee-form.css';
import { apiUrl } from '../../apiCalls/apiCalls';
import axios from 'axios';

class AddEmployeeForm extends Component {
  constructor(props){
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
      role: 'Worker'
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
    console.log(this.props.apiKey)
    console.log(this.props.username)
    console.log(this.props.role)
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.props.apiKey,
      'email': this.state.username,
      'password': this.state.password,
      'first_name': this.state.firstName,
      'last_name': this.state.lastName,
      'street': this.state.address,
      'state': this.state.state,
      'zip': this.state.zip,
      'phone_number': this.state.phone,
      'role': this.state.role
    };
    await axios.post(`${apiUrl}` + `create_user`, {headers: headers}).then((response) => {
        console.log(response)
      })
      // .catch((error) => { console.log(error)});

  }

  render() {
    return (
      <div className='add-employee-form-container'>
        <form 
          className='add-employee-form'
          onSubmit={this.handleSubmit}
        >
          <label>Add A New User</label>
          <div className='add-user-name-container'>
            <input
              className="add-user-name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <input
              className="add-user-name"
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div className='add-user-address-container'>
            <input
              className="add-user-address"
              type="text"
              name="address"
              value={this.state.address}
              placeholder="Address"
              onChange={this.handleChange}
            />
            <input
              className="add-user-city"
              type="text"
              name="city"
              value={this.state.city}
              placeholder="City"
              onChange={this.handleChange}
            />
            <input
              className="add-user-state"
              type="text"
              name="state"
              value={this.state.state}
              placeholder="State"
              onChange={this.handleChange}
            />
            <input
              className="add-user-zip"
              type="text"
              name="zip"
              value={this.state.zip}
              placeholder="Zip Code"
              onChange={this.handleChange}
            />
          </div>
          <input
            className="add-user-phone"
            type="text"
            name="phone"
            value={this.state.phone}
            placeholder="Phone Number"
            onChange={this.handleChange}
          />
          <input
            className="add-user-email"
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <select className='select-role'>
            <option defaultValue={this.state.role}>Worker</option>
            <option value={this.state.role}>Driver</option>
            <option value={this.state.role}>Accountant</option>
            <option value={this.state.role}>Admin</option>
          </select>
          <button
            className='submit-new-employee'
          >
          Add Employee
          </button>
        </form>
      </div>
    )
  }
}

export default AddEmployeeForm;

export const mapStateToProps = state => ({
  role: state.user.role,
  userId: state.user.userId,
  apiKey: state.user.apiKey
})