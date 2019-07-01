import React, { Component } from 'react';
import {
  TextField,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Fab,
  withStyles,
} from '@material-ui/core';
import AddFolderIcon from '@material-ui/icons/CreateNewFolder';
import { compose } from 'recompose';
// import { connect } from 'http2';

import { connect } from 'react-redux';
import axios from 'axios';
import { apiUrl } from '../../apiCalls/apiCalls';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
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
  content: {
    padding: `${theme.spacing()}px ${theme.spacing(5)}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class AddFolders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      folderName: '',
      open: false,
    };
  }

  handleDialog = open => e => {
    e && e.stopPropagation();
    this.setState({ open });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      name: this.state.folderName,
      permission_level: sessionStorage.getItem('role'),
    };
    const header_info = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Token': sessionStorage.getItem('authToken'),
    };
    await axios
      .post(`${apiUrl}create_folder`, formData, { headers: header_info })
      .then(response => {
        console.log(response);
        const folders = JSON.parse(sessionStorage.getItem('folders'));
        folders.push(this.state.folderName);
        sessionStorage.setItem('folders', JSON.stringify(folders));
        this.props.updateFolders();
        this.handleDialog(false)();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { folderName, open } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Fab
          className={classes.fab}
          color="primary"
          onClick={this.handleDialog(true)}
        >
          <AddFolderIcon />
        </Fab>
        <Dialog
          className={classes.dialog}
          open={open}
          onClose={this.handleDialog(false)}
          PaperProps={{
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <DialogTitle>Add New Folder</DialogTitle>
          <DialogContent className={classes.content}>
            <form onSubmit={this.handleSubmit} className="add-folder-form">
              <TextField
                variant="outlined"
                className="folder-name"
                type="text"
                name="folderName"
                value={this.state.folderName}
                placeholder="Folder Name"
                onChange={this.handleChange}
              />
              <Button
                disabled={!folderName || !folderName.length}
                type="submit"
                variant="contained"
                className={classes.button}
                color="secondary"
              >
                <Typography className={classes.buttonText} variant="subtitle1">
                  Create Folder
                </Typography>
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  role: state.user.role,
  apiKey: state.user.apiKey,
});

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withStyles(styles)
)(AddFolders);
