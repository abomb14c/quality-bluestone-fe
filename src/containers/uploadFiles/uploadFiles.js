import React, { Component } from 'react';
// import { Render } from 'react-dom';
import axios from 'axios';
import './upload-files.css';
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

    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  handleUploadFile = async ev => {
    ev.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Token': sessionStorage.getItem('authToken'),
    };
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    await axios
      .post(`${apiUrl}upload_files`, data, { headers: headers })
      .then(response => {
        console.log(response);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <form onSubmit={this.handleUploadFile} className={classes.form}>
          <Typography variant="h5" className={classes.title}>
            Upload a New File
          </Typography>
          <TextField
            variant="outlined"
            ref={ref => {
              this.fileName = ref;
            }}
            type="text"
            label="File Name"
            className={classes.textField}
          />
          <input
            // variant="outlined"
            ref={ref => {
              this.uploadInput = ref;
            }}
            type="file"
            className={classes.fileInput}
          />
          <Button
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
