import React, {Component} from 'react';
// import {fetchWeather} from '../../apiCalls/apiCalls';
import './employee-widget.css';

class EmployeeWidget extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }

  componentDidMount = async() => {
   
  }

  
  render() {
    return (
      <div className='employee-widget-container'>
        <h5>Employees</h5>
        <div 
        className='employee-button'

        ></div>
      </div>
    )
  }
}

export default EmployeeWidget;