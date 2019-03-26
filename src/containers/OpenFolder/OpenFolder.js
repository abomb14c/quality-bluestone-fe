import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import './open-folder.css'; 
import ComponentHeader from '../../components/componentHeader/ComponentHeader';
import UploadFiles from '../uploadFiles/uploadFiles';
import {clearFolder} from '../../actions/updateFolders/updateFolders';


class OpenFolder extends Component {
  constructor(props){
    super(props)
    
    this.state = {

    }
  }

  handleBack = () => {
    this.props.updateFolder()
  }

  render(){
    return (
      <div className='open-folder-container'>
      {this.props.folder.active === false && <Redirect to='/admin' />}
        <ComponentHeader />
        <div className='open-folder-body'>
        <div className='open-folder-nav'>
          <div 
            className='open-folder-back'
            onClick={this.handleBack}
          >
            <div className='open-folder-back-icon'></div>
          </div>
          <div className='open-folder-title-container'>
            <p className='open-folder-title'>{this.props.folder.name}</p>
          </div>
        </div>
          <div className='upload-files-in-folder'>
            <UploadFiles />
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  folder: state.folder
});

export const mapDispatchToProps = dispatch => ({
  updateFolder: () => dispatch(clearFolder())

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OpenFolder)); 