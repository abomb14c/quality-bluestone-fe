import React, { Component } from 'react';
// import { Render } from 'react-dom';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import {
  Button,
  Fab,
  TextField,
  Typography,
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { apiUrl } from '../../apiCalls/apiCalls';
import { relative } from 'path';
// import classes from '*.module.sass';
// import {FilePond} from 'react-filepond';
// import 'filepond/dist/filepond.min.css';

const styles = theme => ({
  root: {
    // width: 400,
    position: 'relative',
  },
  actions: {
    display: 'flex',
    background: 'blue',
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
  container: {
    // position: 'relative',
    // marginLeft: 'auto',
    // height: '100%',
  },
  fab: {
    // position: 'absolute',
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
    height: 40,
    width: 40,
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
      open: false,
    };

    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  handleDialog = open => e => {
    e && e.stopPropagation();
    this.setState({ open });
  };

  handleUploadFile = async ev => {
    ev.preventDefault();
    const { file, fileName } = this.state;
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Token': sessionStorage.getItem('authToken'),
    };
    const data = new FormData();
    data.append('file', file);
    data.append('file_name', fileName);
    data.append('folder_name', this.props.folder);

    await axios
      .post(`${apiUrl}upload_files`, data, { headers })
      .then(response => {
        this.handleDialog(false)();
        console.log(response);
      });
  };

  handleFileSelection = event => {
    this.setState({
      file: event.target.files[0],
    });
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { file, fileName, open } = this.state;

    return (
      <>
        <Fab
          className={classes.fab}
          color="primary"
          onClick={this.handleDialog(true)}
        >
          <AddIcon />
        </Fab>
        <Dialog
          className={classes.root}
          open={open}
          onClose={this.handleDialog(false)}
          onClick={this.stopPropagation}
        >
          <form onSubmit={this.handleUploadFile} className={classes.form}>
            <DialogTitle>Upload a New File</DialogTitle>
            <DialogContent>
              <TextField
                name="fileName"
                variant="outlined"
                value={this.state.fileName}
                type="text"
                label="File Name"
                onChange={this.handleChange}
                className={classes.textField}
                onClick={this.stopPropagation}
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
            </DialogContent>
            <DialogActions>
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
            </DialogActions>
          </form>
        </Dialog>
      </>
    );
  }
}

export default withStyles(styles)(UploadFiles);
