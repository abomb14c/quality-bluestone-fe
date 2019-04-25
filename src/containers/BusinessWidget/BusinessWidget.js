import React, {Component} from 'react';
import './business-widget.css';
import { connect } from 'react-redux';
import { updateFiles } from '../../actions/updateAdmin/updateAdmin';
import { fetchFolders } from '../../apiCalls/apiCalls';

class BusinessWidget extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }

  componentDidMount = async() => {
  //  api call for folders
  // send to redux
    const folders = await fetchFolders();
    console.log(folders)
  }

  openFiles = () => {
    this.props.handleFiles()
  }

  render() {
    return (
      <div className='business-widget-container'>
        <h5 className='folder-title'>Folders</h5>
        <div 
          className='business-button'
          onClick= {this.openFiles}
        >
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  handleFiles: () => dispatch(updateFiles())
});

export default connect(null, mapDispatchToProps)(BusinessWidget);