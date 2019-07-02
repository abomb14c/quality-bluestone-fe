import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { FolderWidget } from '../../components';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FolderContainer = ({ classes, folders, updateFolders }) => {
  // console.log(folders)

  const displayFolders = folders.map((folder, ind) => {
    return (
      <FolderWidget
        folder={folder}
        key={`folder-${ind}`}
        updateFolders={updateFolders}
      />
    );
  });

  return <div className={classes.root}>{displayFolders}</div>;
};

FolderContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  folders: PropTypes.array,
  updateFolder: PropTypes.func,
};

export default withStyles(styles)(FolderContainer);
