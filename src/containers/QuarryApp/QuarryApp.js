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
          <div  className='quarry-phone-container'>
            <input
              className='quarry-phone'
              type='text'
              name='phone'
              value={this.state.phone}
              placeholder='Phone Number'
              onChange={this.handleChange}
            />
            <input
              className='quarry-reffered'
              type='text'
              name='reffered'
              value={this.state.reffered}
              placeholder='Were you referred by someone? Who?'
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
        <form className='employment-education-quarry'>
          <legend className="quarry-legend">Education History</legend>
          <div className='quarry-high-container'>
            <input
                className='quarry-education-high-school'
                type='text'
                name='highSchool'
                value={this.state.highSchool}
                placeholder='High School'
                onChange={this.handleChange}
              />
              <input
                className='quarry-education-high-attended'
                type='text'
                name='highSchoolAttended'
                value={this.state.highSchoolAttended}
                placeholder='Dates Attended'
                onChange={this.handleChange}
              />
              <input
                className='quarry-education-high-graduate'
                type='text'
                name='highSchoolGrad'
                value={this.state.highSchoolGrad}
                placeholder='Did You Graduate?'
                onChange={this.handleChange}
              />
            </div>
            <div className='quarry-college-container'>
              <input
                className='quarry-education-college'
                type='text'
                name='college'
                value={this.state.college}
                placeholder='College'
                onChange={this.handleChange}
              />
              <input
                className='quarry-education-college-attended'
                type='text'
                name='collegeAttended'
                value={this.state.collegeAttended}
                placeholder='Dates Attended'
                onChange={this.handleChange}
              />
              <input
                className='quarry-education-college-graduate'
                type='text'
                name='collegeGrad'
                value={this.state.collegeGrad}
                placeholder='Did You Graduate?'
                onChange={this.handleChange}
              />
            </div>
            <div className='quarry-other-container'>
              <input
                className='quarry-education-other'
                type='text'
                name='other'
                value={this.state.other}
                placeholder='Other'
                onChange={this.handleChange}
              />
              <input
                className='quarry-education-other-attended'
                type='text'
                name='otherAttended'
                value={this.state.otherAttended}
                placeholder='Dates Attended'
                onChange={this.handleChange}
              />
              <input
                className='quarry-education-other-graduate'
                type='text'
                name='otherGrad'
                value={this.state.otherGrad}
                placeholder='Did You Graduate?'
                onChange={this.handleChange}
              />
          </div>
        </form>
        <form className='employment-employer-quarry'>
          <legend className="quarry-legend">Former Employers</legend>
          <p className='quarry-legend-sub'>List Below Last Four Employers, Starting With Last One First</p>
          <div className='quarry-employer-name-container'>
            <input
              className='quarry-employer-name'
              type='text'
              name='employerName1'
              value={this.state.employerName1}
              placeholder='Employer Name'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-address'
              type='text'
              name='employerAddress1'
              value={this.state.employerAddress1}
              placeholder='Address'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employer-dates-container'>
            <input
              className='quarry-employer-dates'
              type='text'
              name='employerDates1'
              value={this.state.employerDates1}
              placeholder='Dates Employed'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-salary'
              type='text'
              name='employerSalary1'
              value={this.state.employerSalary1}
              placeholder='Salary'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-position'
              type='text'
              name='employerPosition1'
              value={this.state.employerPosition1}
              placeholder='Position'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employer-leaving-container'>
            <input
              className='quarry-employer-leaving'
              placeholder='Reason For Leaving'
              name='employerLeaving1'
              value={this.state.employerLeaving1}
              onChange={this.handleChange}
            />
          </div>
          <hr></hr>
          <div className='quarry-employer-name-container'>
            <input
              className='quarry-employer-name'
              type='text'
              name='employerName1'
              value={this.state.employerName1}
              placeholder='Employer Name'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-address'
              type='text'
              name='employerAddress1'
              value={this.state.employerAddress1}
              placeholder='Address'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employer-dates-container'>
            <input
              className='quarry-employer-dates'
              type='text'
              name='employerDates1'
              value={this.state.employerDates1}
              placeholder='Dates Employed'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-salary'
              type='text'
              name='employerSalary1'
              value={this.state.employerSalary1}
              placeholder='Salary'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-position'
              type='text'
              name='employerPosition1'
              value={this.state.employerPosition1}
              placeholder='Position'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employer-leaving-container'>
            <input
              className='quarry-employer-leaving'
              placeholder='Reason For Leaving'
              name='employerLeaving1'
              value={this.state.employerLeaving1}
              onChange={this.handleChange}
            />
          </div>
          <hr></hr>
          <div className='quarry-employer-name-container'>
            <input
              className='quarry-employer-name'
              type='text'
              name='employerName1'
              value={this.state.employerName1}
              placeholder='Employer Name'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-address'
              type='text'
              name='employerAddress1'
              value={this.state.employerAddress1}
              placeholder='Address'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employer-dates-container'>
            <input
              className='quarry-employer-dates'
              type='text'
              name='employerDates1'
              value={this.state.employerDates1}
              placeholder='Dates Employed'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-salary'
              type='text'
              name='employerSalary1'
              value={this.state.employerSalary1}
              placeholder='Salary'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-position'
              type='text'
              name='employerPosition1'
              value={this.state.employerPosition1}
              placeholder='Position'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employer-leaving-container'>
            <input
              className='quarry-employer-leaving'
              placeholder='Reason For Leaving'
              name='employerLeaving1'
              value={this.state.employerLeaving1}
              onChange={this.handleChange}
            />
          </div>
          <hr></hr>
          <div className='quarry-employer-name-container'>
            <input
              className='quarry-employer-name'
              type='text'
              name='employerName1'
              value={this.state.employerName1}
              placeholder='Employer Name'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-address'
              type='text'
              name='employerAddress1'
              value={this.state.employerAddress1}
              placeholder='Address'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employer-dates-container'>
            <input
              className='quarry-employer-dates'
              type='text'
              name='employerDates1'
              value={this.state.employerDates1}
              placeholder='Dates Employed'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-salary'
              type='text'
              name='employerSalary1'
              value={this.state.employerSalary1}
              placeholder='Salary'
              onChange={this.handleChange}
            />
            <input
              className='quarry-employer-position'
              type='text'
              name='employerPosition1'
              value={this.state.employerPosition1}
              placeholder='Position'
              onChange={this.handleChange}
            />
          </div>
          <div className='quarry-employer-leaving-container'>
            <input
              className='quarry-employer-leaving'
              placeholder='Reason For Leaving'
              name='employerLeaving1'
              value={this.state.employerLeaving1}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default QuarryApp;