import React, { Component } from 'react';
// import { Render } from 'react-dom';
import axios from 'axios';
import { apiUrl } from '../../apiCalls/apiCalls';
import {
  Card,
  Button,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
// import classes from '*.module.sass';
// import {FilePond} from 'react-filepond';
// import 'filepond/dist/filepond.min.css';

const styles = theme => ({
  root: {
    width: 400,
  },
  button: {
    margin: `${theme.spacing.unit * 2}px 0`,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: theme.palette.primary.contrastText,
    letterSpacing: 0.5,
    fontWeight: 700,
  },
  fileInput: {
    margin: `${theme.spacing.unit * 2}px 0`,
    width: '100%',
    height: theme.spacing.unit * 3,
  },
  form: {
    flexDirection: 'column',
    padding: theme.spacing.unit * 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    margin: `${theme.spacing.unit * 2}px 0`,
    color: theme.palette.secondary.main,
    width: '100%',
  },
});

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      file: null,
    };

    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  handleUploadFile = async ev => {
    const { file, fileName } = this.state;
    ev.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Token': sessionStorage.getItem('authToken'),
    };
    const data = new FormData();
    data.append('file', file);
    data.append('filename', fileName);

    await axios
      .post(`${apiUrl}upload_files`, data, { headers })
      .then(response => {
        console.log(response);
      });
  };

  handleFileSelection = event => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { file, fileName } = this.state;

    return (
      <Card className={classes.root}>
        <form onSubmit={this.handleUploadFile} className={classes.form}>
          <Typography variant="h5" className={classes.title}>
            Upload a New File
          </Typography>
          <TextField
            name="fileName"
            variant="outlined"
            value={this.state.fileName}
            type="text"
            label="File Name"
            onChange={this.handleChange}
            className={classes.textField}
          />
          <label htmlFor="upload-input">
            <Button variant="outlined" component="span">
              Browse...
            </Button>
            {this.state.file ? (
              <Typography>{this.state.file.name}</Typography>
            ) : null}
          </label>
          <input
            // variant="outlined"
            onChange={this.handleFileSelection}
            id="upload-input"
            type="file"
            hidden
            className={classes.fileInput}
          />
          <Button
            disabled={!file || !fileName.length}
            type="submit"
            variant="contained"
            className={classes.button}
            color="secondary"
          >
            <Typography className={classes.buttonText} variant="subtitle1">
              Upload
            </Typography>
          </Button>
        </form>
      </Card>
    );
  }
}

export default withStyles(styles)(UploadFiles);
