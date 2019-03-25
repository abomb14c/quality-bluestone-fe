import React, {Component} from 'react';
import './business-folders.css';

// import uploadFiles from '../uploadFiles/uploadFiles';
// import UploadFiles from '../uploadFiles/uploadFiles';
import AddFolders from '../AddFolders/AddFolders';
import Axios from 'axios';
import { apiUrl } from '../../apiCalls/apiCalls';

class BusinessFolders extends Component {
  constructor(props){
    super(props)

    this.state = {
      active:false,
      folders: []
    }
  }

  handleClick = () => {
    this.setState({
      active: true
    })
  }

  componentDidMount() {
  
    const headerInfo = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Token': sessionStorage.getItem('authToken')
    }
    Axios.get(`${apiUrl}get_all_folders`, {headers: headerInfo}).then((response) => {
      console.log(response.data);
      return response.data;
    }).then(data => {
      console.log(data[0])
      let folderNames = data.map((folder)=> {
        return(
          <li key={folder.name}> {folder.name} </li>
        )
      })
      this.setState({folders: folderNames})
    }).catch((error) => {
      console.log(error)
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
        <div>
        {this.state.folders}
        </div>
      </div>
    )
  }
}

export default BusinessFolders;