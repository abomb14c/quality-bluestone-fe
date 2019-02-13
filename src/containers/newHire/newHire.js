import React, { Component } from 'react';
import './new-hire.css';

import ComponentHeader from '../../components/componentHeader/ComponentHeader';
import QuarryApp from '../QuarryApp/QuarryApp';
import {Footer} from '../../components/Footer/Footer';

class NewHire extends Component {
  constructor(props){
    super(props)

    this.state = {
      type: null
    }
  }

  handleTypeQuarry = (event) => {
    event.preventDefault()
    this.setState ({
      type: 'quarry'
    })
    console.log(this.state)
  }

  render(){ 
    return (
      // <div className='app-container'>
      <div className='new-hire-container'>
        <div className='header'>
          <ComponentHeader />
        </div>
        <div className='new-hire-title-container'>
          <h2 className='new-hire-title'>Application For Employment</h2>
          <h5 className='new-hire-sub-title'>Pre-Employment Questionnaire</h5>
          <h5 className='new-hire-sub-title, new-hire-sub-color'>Equal Opportunity Employer</h5>
        </div>
        <div className='type-container'>
          <div className='quarry-container, type-sub-container'>
            <h5 className='type-title'>Quarry Application</h5>
            <div 
              onClick={this.handleTypeQuarry}
              className='plus-button'
              name= 'type'
              value='quarry'
            >
            </div>
          </div>
          <div className='truck-container, type-sub-container'>
            <h5 className='type-title'>Truck Driver Application</h5>
            <div 
              className='plus-button'
            >
            </div>
          </div>
        </div>
        {this.state.type === 'quarry' &&
        <div className='quarry-app-section'>
          <QuarryApp />
       </div>
        }
      </div>
   
    )
  }
}

export default NewHire;