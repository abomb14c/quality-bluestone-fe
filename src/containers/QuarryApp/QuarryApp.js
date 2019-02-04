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
      presentZip: '',
      positionDesired: '',
  
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };



componentDidMount() {
  console.log(this.state.employedChecked)
}
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
              name='presentAddress'
              value={this.state.presentAddress}
              placeholder='Present Address'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-present-city-container'>
            <input
              className='quarry-present-city'
              type='text'
              name='presentCity'
              value={this.state.presentCity}
              placeholder='City'
              onChange={this.handleChange}
            />
            <input
              className='quarry-present-state'
              type='text'
              name='presentState'
              value={this.state.presentState}
              placeholder='State'
              onChange={this.handleChange}
            />
            <input
              className='quarry-present-zip'
              type='text'
              name='presentZip'
              value={this.state.presentZip}
              placeholder='Zip Code'
              onChange={this.handleChange}
            />
          </div>
        </form>
        <form className='employment-desired-quarry'>
        <legend className="quarry-legend">Employment Desired</legend>
          <div className='quarry-position-desired-container'>
            <input
              className='quarry-position-desired'
              type='text'
              name='positionDesired'
              value={this.state.positionDesired}
              placeholder='Position Desired'
              onChange={this.handleChange}
            />
            <input
              className='quarry-start-date'
              type='text'
              name='startDate'
              value={this.state.startDate}
              placeholder='Date You Can Start'
              onChange={this.handleChange}
            />
            <input
              className='quarry-salary'
              type='text'
              name='salary'
              value={this.state.startDate}
              placeholder='Desired Salary'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employed-container'>
            <input
              className='quarry-employed'
              type='text'
              name='employed'
              value={this.state.employed}
              placeholder='Are you currently employed?'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employed-contact'
              type='text'
              name='employedContact'
              value={this.state.employedContact}
              placeholder='If yes, may we contact employer?'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-previous-container'>
            <input
              className='quarry-employed-previous'
              type='text'
              name='employedPrevious'
              value={this.state.employedPrevious}
              placeholder='Have you applied to this company before?'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employed-previous-when'
              type='text'
              name='employedWhen'
              value={this.state.employedWhen}
              placeholder='When?'
              onChange={this.handleChange}
            />
          </div>
        </form> 
      </div>
    )
  }
}

export default QuarryApp;