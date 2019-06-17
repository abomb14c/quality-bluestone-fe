import React, { Component } from 'react';
import { connect } from 'react-redux';
import './open-folder.css';
import { ComponentHeader } from '../../components';
import { UploadFiles } from '..';
import { clearFolder } from '../../actions';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottom';
import {
  Table,
  TableBody,
  TableRow,
  TableCellTypography,
  withStyles,
  TableCell,
  Typography,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    // justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  files: {
    height: 280,
    width: '100%',
    overflow: 'scroll',
    marginLeft: theme.spacing(3),
  },
});

class OpenFolder extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { folder, classes } = this.props;

    return (
      <div className={classes.root}>
        <UploadFiles />
        <Typography className={classes.files}>
          {folder}
          <DownloadIcon />
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(OpenFolder);
