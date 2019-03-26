import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { mapStateToProps } from '../../components/Admin/Admin';
import { withRouter } from 'react-router-dom';

class OpenFolder extends Component {
  constructor(props){
    super(props)
    
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <p>{this.props.folder.name}</p>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  folder: state.folder
});

export default withRouter(connect(mapStateToProps,null)(OpenFolder)); 