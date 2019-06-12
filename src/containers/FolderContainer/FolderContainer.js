import React from 'react';
import { FolderWidget } from '../../components';
import { withStyles } from '@material-ui/core';

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

export default withStyles(styles)(FolderContainer);
