import React, {Component} from 'react';
import './folder-widget.css';
// import './business-folders.css';
import {connect} from 'react-redux';
// import { mapDispatchToProps } from '../../containers/EmployeeWidget/EmployeeWidget';
import { updateFolder } from '../../actions/updateFolders/updateFolders';

class FolderWidget extends Component {
  constructor(props){
  super(props)

  this.state = {
    active:false
  }
  }

  handleClick = () => {
    let folder = this.props.folder;
    this.props.openFolder(folder)
  }
  render(){
    return (
      <div className='folder'>
        <p className='folder-title'>{this.props.folder}</p>
        <div 
          className='open-button'
          onClick={this.handleClick}
        ></div>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  openFolder: (folder) => dispatch(updateFolder(folder))

});

export default connect(null, mapDispatchToProps)(FolderWidget);