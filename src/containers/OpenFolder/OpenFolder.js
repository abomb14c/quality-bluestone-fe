import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { mapStateToProps } from '../../components/Admin/Admin';

class OpenFolder extends Component {
  constructor(props){
    super(props)
    
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <p>{this.props.folder}</p>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  folder: state.folder
});

export default connect(mapStateToProps,null)(OpenFolder); 