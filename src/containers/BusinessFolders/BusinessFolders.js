import React, {Component} from 'react';
import './business-folders.css';

// import uploadFiles from '../uploadFiles/uploadFiles';
// import UploadFiles from '../uploadFiles/uploadFiles';
import AddFolders from '../AddFolders/AddFolders';
import Axios from 'axios';
import { apiUrl } from '../../apiCalls/apiCalls';
import {FolderContainer}from '../FolderContainer/FolderContainer';


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
          folder.name
        )
      })
      this.setState({folders: [...folderNames]})
      console.log(this.state)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    let folders = this.state.folders
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
        <div className='existing-folders'>
        <FolderContainer  folders={folders}/>
        </div>
      </div>
    )
  }
}

export default BusinessFolders;