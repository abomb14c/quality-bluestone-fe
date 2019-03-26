import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import './open-folder.css'; 
import '../../components/componentHeader/ComponentHeader';
import ComponentHeader from '../../components/componentHeader/ComponentHeader';
import UploadFiles from '../uploadFiles/uploadFiles';

class OpenFolder extends Component {
  constructor(props){
    super(props)
    
    this.state = {

    }
  }

  render(){
    return (
      <div className='open-folder-container'>
        <ComponentHeader />
        <div className='open-folder-body'>
          <div className='open-folder-title-container'>
            <p className='open-folder-title'>{this.props.folder.name}</p>
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

export default withRouter(connect(mapStateToProps,null)(OpenFolder)); 