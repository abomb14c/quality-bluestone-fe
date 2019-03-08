import React, {Component} from 'react';
import {fetchWeather} from '../../apiCalls';

class AdminWidget extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }

  componentDidMount = async() => {
    const weather = await fetchWeather()
    console.log(weather)
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default AdminWidget;