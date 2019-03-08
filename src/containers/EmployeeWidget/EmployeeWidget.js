import React, {Component} from 'react';
import {fetchWeather} from '../../apiCalls/apiCalls';
// import './admin-widget.css';

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
      <div className='widget-container'>
      <p>admin widget with simple apis goes here</p>
      </div>
    )
  }
}

export default EmployeeWidget;