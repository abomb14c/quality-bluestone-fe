import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import './open-folder.css'; 
import '../../components/componentHeader/ComponentHeader';
import ComponentHeader from '../../components/componentHeader/ComponentHeader';


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
        <p className='open-folder-title'>{this.props.folder.name}</p>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  folder: state.folder
});

export default withRouter(connect(mapStateToProps,null)(OpenFolder)); 