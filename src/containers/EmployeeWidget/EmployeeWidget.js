import React, {Component} from 'react';
// import {fetchWeather} from '../../apiCalls/apiCalls';
import './employee-widget.css';
// import { connect } from 'http2';
import {connect} from 'react-redux';
import {updateEmployees} from '../../actions/updateAdmin/updateAdmin';
import { fetchAllUsers } from '../../apiCalls/apiCalls';
import { apiUrl, headerInfoWithAuth } from '../../apiCalls/apiCalls'
import Axios from 'axios';

class EmployeeWidget extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }

  componentDidMount = async() => {
    // send to redux when server is running
    const formData = '';
    await Axios.get(`${apiUrl}get_all_users`, { params: {data: formData}, headers: headerInfoWithAuth}).then((response) => {
      const employees = response.data;
      console.log(employees);
    }).catch((error) => {
      console.log(error)
    })
  }

  openEmployees = () => {
    this.props.handleEmployees()
  }

  render() {
    return (
      <div className='employee-widget-container'>
        <h5 className='employees-title'>Employees</h5>
        <div 
          className='employee-button'
          onClick= {this.openEmployees}
        >
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  handleEmployees: () => dispatch(updateEmployees())
});




export default connect(null, mapDispatchToProps)(EmployeeWidget);