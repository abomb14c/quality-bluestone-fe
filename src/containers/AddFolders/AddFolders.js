import React, { Component } from 'react';
// import { connect } from 'http2';

import {connect} from 'react-redux';
import './add-folders.css';
import axios from 'axios'
import { apiUrl } from '../../apiCalls/apiCalls';

class AddFolders extends Component {
  constructor(props){
    super(props)

    this.state = {
      folderName:''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async(event) => {
    const formData = {
      'name':             this.state.folderName,
      'permission_level': sessionStorage.getItem('role')
    }
    const header_info = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Token': sessionStorage.getItem('authToken')
    };
    await axios.post(`${apiUrl}create_folder`, formData, {headers: header_info}).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div className='add-folder-container'>
        <form 
          onSubmit={this.handleSubmit}
          className='add-folder-form'
        >
        <label>Add New Folder</label>
          <input
            className="folder-name"
            type="text"
            name="folderName"
            value={this.state.folderName}
            placeholder="Folder Name"
            onChange={this.handleChange}
          />
          <button className='new-folder-button'>Create Folder</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  role: state.user.role,
  apiKey: state.user.apiKey
})

export default connect(mapStateToProps,null)(AddFolders);