import React, { Component } from 'react';
// import { connect } from 'http2';

import {connect} from 'react-redux';
import './add-folders.css';

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
    let fileInfo = {
      fileName: this.state.FileName,
      role: this.state.role 
    }

    // api call here with fileInfo as an arg for body
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
  role: state.user.role
})

export default connect(mapStateToProps,null)(AddFolders);