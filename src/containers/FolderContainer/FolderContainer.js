import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { FolderWidget } from '../../components';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export const FolderContainer = ({ classes, folders }) => {
  // console.log(folders)

  const displayFolders = folders.map(folder => {
    return <FolderWidget folder={folder} key="folder" />;
  });

  return <div className={classes.root}>{displayFolders}</div>;
};

FolderContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  folders: PropTypes.array,
};

export default withStyles(styles)(FolderContainer);
