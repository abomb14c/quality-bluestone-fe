import React, { Component } from 'react';
import './new-hire.css';

import ComponentHeader from '../../components/componentHeader/ComponentHeader';

class NewHire extends Component {

  render(){ 
    return (
      <div className='new-hire-container'>
        <div className='header'>
          <ComponentHeader />
        </div>
      </div>
    )
  }
}

export default NewHire;