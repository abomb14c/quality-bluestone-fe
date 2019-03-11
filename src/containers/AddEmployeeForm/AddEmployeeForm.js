import React, {Component} from 'react';

class AddEmployeeForm extends Component {
  constructor(props){
    super(props)
  
    this.state= {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  

  render() {
    return (
      <div>
        <form>
          <input
            className="add-user"
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            className="add-user"
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            className="add-user"
            type="text"
            name="address"
            value={this.state.address}
            placeholder="Address"
            onChange={this.handleChange}
          />
          <input
            className="add-user"
            type="text"
            name="city"
            value={this.state.city}
            placeholder="City"
            onChange={this.handleChange}
          />
          <input
            className="add-user"
            type="text"
            name="state"
            value={this.state.state}
            placeholder="State"
            onChange={this.handleChange}
          />
          <input
            className="add-user"
            type="text"
            name="zip"
            value={this.state.zip}
            placeholder="Zip Code"
            onChange={this.handleChange}
          />
          <input
            className="add-user"
            type="text"
            name="phone"
            value={this.state.phone}
            placeholder="Phone Number"
            onChange={this.handleChange}
          />
          <input
            className="add-user"
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default AddEmployeeForm;