import React from 'react';
import { FolderWidget } from '../../components/FolderWidget/FolderWidget';


export const FolderContainer = (props) => {
  const {folders} = props;
  console.log(folders)

  const displayFolders = folders.map(folder => {
    return(<FolderWidget {...folder}/>)
  })

  return (
    <div>
      {displayFolders}
    </div>
  )
}