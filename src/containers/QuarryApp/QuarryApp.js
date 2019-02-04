import React, {Component} from 'react';
import './quarry-app.css';


class QuarryApp extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      first: '',
      last: '',
      social: '',
      presentAddress: '',
      presentCity: '',
      presentState:'', 
      presentZip: ''
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
      <div className="quarry-app-container">
        <form className='personal-info-quarry'>
          <legend className="quarry-legend">Personal Information</legend>
          <div className="quarry-name-container">
            <input
              className='quarry-first-name'
              type='text'
              name='first'
              value={this.state.first}
              placeholder='First Name'
              onChange={this.handleChange}
            />
            <input
              className='quarry-last-name'
              type='text'
              name='last'
              value={this.state.last}
              placeholder='Last Name'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-social-container'>
            <input
              className='quarry-social'
              type='text'
              name='social'
              value={this.state.social}
              placeholder='Social Security Number'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-present-address-container'>
            <input
              className='quarry-present-address'
              type='text'
              name='present-address'
              value={this.state.presentAddress}
              placeholder='Present Address'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-present-city-container'>
            <input
              className='quarry-present-city'
              type='text'
              name='present-city'
              value={this.state.presentCity}
              placeholder='City'
              onChange={this.handleChange}
            />
            <input
              className='quarry-present-state'
              type='text'
              name='present-state'
              value={this.state.presentState}
              placeholder='State'
              onChange={this.handleChange}
            />
            <input
              className='quarry-present-zip'
              type='text'
              name='present-zip'
              value={this.state.presentZip}
              placeholder='Zip Code'
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default QuarryApp;