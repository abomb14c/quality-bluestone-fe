import React, { Component } from 'react';
// import { Render } from 'react-dom';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
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
  Divider,
} from '@material-ui/core';
import { deleteItem, apiEndpoints } from '../../apiCalls/apiCalls';
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
    // justifyContent: 'space-around',
  },
  button: {
    margin: theme.spacing(2),
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
    height: 35,
    width: 35,
    marginRight: theme.spacing(2),
    transistion: '4s',
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
  title: {
    marginTop: theme.spacing(),
  },
});

class DeleteFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDialog = open => e => {
    e && e.stopPropagation();
    this.setState({ open });
  };

  handleDelete = async e => {
    const { folder } = this.props;
    const folderData = { folder_name: folder };
    this.handleDialog(false)(e);
    this.removeFolderFromView(folder);
    await deleteItem(folderData, apiEndpoints.delete.folder);
  };

  removeFolderFromView = folder => {
    const folders = JSON.parse(sessionStorage.getItem('folders'));
    const folderLocation = folders.indexOf(folder);
    folders.splice(folderLocation, 1);
    sessionStorage.setItem('folders', JSON.stringify(folders));
    this.props.updateFolders();
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  render() {
    const { classes, folder } = this.props;
    const { open } = this.state;

    return (
      <>
        <Fab
          className={classes.fab}
          color="secondary"
          onClick={this.handleDialog(true)}
        >
          <DeleteIcon />
        </Fab>
        <Dialog
          className={classes.root}
          open={open}
          onClose={this.handleDialog(false)}
          onClick={this.stopPropagation}
        >
          <DialogTitle className={classes.title}>
            Are you sure you want to delete {folder}
          </DialogTitle>
          <DialogActions className={classes.actions}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={this.handleDelete}
            >
              <Typography className={classes.buttonText} variant="subtitle1">
                Confirm
              </Typography>
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
              onClick={this.handleDialog(false)}
            >
              <Typography className={classes.buttonText} variant="subtitle1">
                Cancel
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default withStyles(styles)(DeleteFolder);
