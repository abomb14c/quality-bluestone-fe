import React, { Component } from 'react';
import './open-folder.css';
import { UploadFiles } from '..';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottom';
import AddIcon from '@material-ui/icons/Add';
import { withStyles, Fab, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    // justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    minHeight: 100,
  },
  files: {
    height: 280,
    width: '100%',
    overflow: 'scroll',
    marginLeft: theme.spacing(3),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});

class OpenFolder extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  displayFiles = () => {
    const { classes, files } = this.props;
    let display;

    if (files.length) {
      display = files.map((file, index) => {
        return (
          <Typography className={classes.files} key={`file-${index}`}>
            {file.file_link}
            <DownloadIcon />
          </Typography>
        );
      });
    } else {
      display = (
        <Typography>This Folder currently contains no files</Typography>
      );
    }
    return display;
  };

  render() {
    const { classes, folder } = this.props;

    return (
      <div className={classes.root}>
        <>{this.displayFiles()}</>
        <UploadFiles folder={folder} />
      </div>
    );
  }
}

export default withStyles(styles)(OpenFolder);
