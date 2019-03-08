import React, {Component} from 'react';
import './business-folders.css';

class BusinessFolders extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <div className='business-container'>
        <div className='add-employee'>
          <h5>Add File</h5>
          <div className='business-button'></div>
        </div>
      </div>
    )
  }
}

export default BusinessFolders;