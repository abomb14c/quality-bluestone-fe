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
    // let fileInfo = {
    //   folderName: this.state.folderName,
    //   role: this.state.role 
    // }
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.props.apiKey,
      'folderName': this.state.folderName,
      'role': this.props.role
    };
    await axios.post(`${apiUrl}` + `add_folder`, {headers: headers}).then((response) => {
        console.log(response)
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