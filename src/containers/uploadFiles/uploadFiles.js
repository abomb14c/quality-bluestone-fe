import React, { Component } from "react";
// import { Render } from 'react-dom';
import axios from "axios";
import "./upload-files.css";
import { apiUrl } from "../../apiCalls/apiCalls";
import { TextField } from "@material-ui/core";
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
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Token": sessionStorage.getItem("authToken")
    };
    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    await axios
      .post(`${apiUrl}upload_files`, data, { headers: headers })
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <div className="file-upload-container">
        <form onSubmit={this.handleUploadFile} className="file-upload-form">
          <label className="file-upload-label">Upload A New File</label>
          <TextField
            variant="outlined"
            ref={ref => {
              this.fileName = ref;
            }}
            type="text"
            placeholder="Enter the name of the file"
            className='file-name-TextField
variant="outlined"'
          />
          <TextField
            variant="outlined"
            ref={ref => {
              this.uploadInput = ref;
            }}
            type="file"
            className="file-to-upload"
          />
          <button className="file-upload-button">Upload</button>
        </form>
      </div>
    );
  }
}

export default UploadFiles;
