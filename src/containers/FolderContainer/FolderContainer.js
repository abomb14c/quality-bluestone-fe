import React from 'react';
import { FolderWidget } from '../../components';
import './folder-container.css';

export const FolderContainer = props => {
  const { folders } = props;
  // console.log(folders)

  const displayFolders = folders.map(folder => {
    return <FolderWidget folder={folder} />;
  });

  return <div className="business-folder-container">{displayFolders}</div>;
};

export default FolderContainer;
