import React, { Component } from 'react';
import './open-folder.css';
import { UploadFiles } from '..';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottom';
import DeleteIcon from '@material-ui/icons/Delete';

import { withStyles, Fab, Divider, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    // position: 'relative',
    minHeight: 100,
  },
  actionsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  files: {
    height: 280,
    width: '100%',
    overflow: 'scroll',
    marginLeft: theme.spacing(3),
  },
  fab: {
    // position: 'absolute',
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
    marginRight: theme.spacing(2),
    height: 40,
    width: 40,
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
        <Typography>
          Click the plus on the right hand side to add files
        </Typography>
      );
    }
    return display;
  };

  render() {
    const { classes, folder } = this.props;

    return (
      <div className={classes.root}>
        {/* <Divider /> */}
        {this.displayFiles()}
        <div className={classes.actionsContainer}>
          {/* <Fab
            className={classes.fab}
            color="secondary"
            // onClick={this.handleDialog(true)}
          >
            <DeleteIcon />
          </Fab> */}
          <UploadFiles folder={folder} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(OpenFolder);
