import React, { Component } from 'react';
// import { Render } from 'react-dom';
import axios from 'axios';
import './uploadFiles.css';
import {FilePond} from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class UploadFiles extends Component {
  // This function does the uploading to cloudinary
  onDrop = files => {
    // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
    const uploads = files.map(file => {
      // our formdata
      const formData = new FormData();
      formData.append("file", file);
      formData.append("timestamp", (Date.now() / 1000) | 0);
      formData.append("name", "test_user")

      // Replace cloudinary upload URL with yours
      return axios.post(
        "http://localhost:3001/upload_files",
        formData, 
        { headers: { "X-Requested-With": "XMLHttpRequest", 'Access-Control-Allow-Origin': '*' }})
        .then(response => console.log(response.data))
    });

    // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
    axios.all(uploads).then(() => {
      // ... do anything after successful upload. You can setState() or save the data
      console.log('Files have all being uploaded')
    });
  }
  render() {
    return (
      <FilePond />
 
    );
  }
}

export default UploadFiles