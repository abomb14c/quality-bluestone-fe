import React, {Component} from 'react';
import './business-folders.css';

// import uploadFiles from '../uploadFiles/uploadFiles';
// import UploadFiles from '../uploadFiles/uploadFiles';
import AddFolders from '../AddFolders/AddFolders';

class BusinessFolders extends Component {
  constructor(props){
    super(props)

    this.state = {
      active:false
    }
  }

  handleClick = () => {
    this.setState({
      active: true
    })
  }

  render() {
    return(
      <div className='business-container'>
        {!this.state.active &&
        <div className='add-employee'>
          <h5>Add Folder</h5>
          <div 
            className='business-button'
            onClick={this.handleClick}
          >
          </div>
        </div>
        }
        {this.state.active === true && 
          <AddFolders />
        }
      </div>
    )
  }
}

export default BusinessFolders;