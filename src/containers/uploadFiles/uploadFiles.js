import React, { Component } from 'react';
// import { Render } from 'react-dom';
import axios from 'axios';
import './uploadFiles.css';
import { apiUrl } from '../../apiCalls/apiCalls';
// import {FilePond} from 'react-filepond';
// import 'filepond/dist/filepond.min.css';

class UploadFiles extends Component {
  constructor(props) {
    super(props);

    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  handleUploadFile = async ev => {
    ev.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Authorization': sessionStorage.getItem('authToken')
    };
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    await axios.post(`${apiUrl}/upload_files`, data, {headers: headers})
      .then((response) => {console.log(response)});
  }
  // This function does the uploading to cloudinary
  // onDrop = files => {
  //   // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
  //   const uploads = files.map(file => {
  //     // our formdata
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("timestamp", (Date.now() / 1000) | 0);
  //     formData.append("name", "test_user")

  //     // Replace cloudinary upload URL with yours
  //     return axios.post(
  //       "http://localhost:3001/upload_files",
  //       formData, 
  //       { headers: { "X-Requested-With": "XMLHttpRequest", 'Access-Control-Allow-Origin': '*' }})
  //       .then(response => console.log(response.data))
  //   });

  //   // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
  //   axios.all(uploads).then(() => {
  //     // ... do anything after successful upload. You can setState() or save the data
  //     console.log('Files have all being uploaded')
  //   });
  // }
  render() {
    return (
      // <FilePond 
      //   ref={ref => (this.pond=ref)}
      //   server= {
      //     url= "http://localhost:3001",
      //     process= './upload_files'

      //   }
      //   files={this.state.files}
      //   oninit={() => this.handleInit()}
      //   onupdatefiles={fileItems => {
      //     this.setState({
      //       files: fileItems.map(fileItem => fileItem.file)
      //     });
      //   }}
      // />
      <form onSubmit={this.handleUploadFile}>
        <div>
          <input ref={(ref) => {this.uploadInput = ref; }} type ="file" />
        </div>
        <div>
          <input ref={(ref) => {this.fileName=ref; }} type='text' placeholder="Enter the name of the file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
      </form>
    );
  }
}

export default UploadFiles