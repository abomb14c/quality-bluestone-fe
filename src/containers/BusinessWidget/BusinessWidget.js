import React, {Component} from 'react';
import './business-widget.css';
import { connect } from 'react-redux';
import { updateFiles } from '../../actions/updateAdmin/updateAdmin';
import { apiUrl, headerInfoWithAuth } from '../../apiCalls/apiCalls'
import Axios from 'axios';
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
    const formData = ''
    await Axios.get(`${apiUrl}get_all_folders`, { params: {data: formData}, headers: headerInfoWithAuth}).then((response => {
      const folders = response.data
      console.log(folders)
    })
      
    ).catch((error) => {
      console.log(error)
    })
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