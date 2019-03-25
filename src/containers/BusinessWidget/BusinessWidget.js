import React, {Component} from 'react';
import './business-widget.css';
import { connect } from 'react-redux';
import { updateFiles } from '../../actions/updateAdmin/updateAdmin';

class BusinessWidget extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }

  componentDidMount = async() => {
  //  api call for files
  
  }

  openFiles = () => {
    this.props.handleFiles()
  }

  render() {
    return (
      <div className='business-widget-container'>
        <h5>Files</h5>
        <div 
        className='business-button'
        onClick= {this.openFiles}

        ></div>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  handleFiles: () => dispatch(updateFiles())
});

export default connect(null, mapDispatchToProps)(BusinessWidget);