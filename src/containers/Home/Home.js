import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { apiUrl } from '../../apiCalls/apiCalls';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'folders': []
    }
  }

  componentWillMount() {
    const formData = {

    }
    const headerInfo = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Token': sessionStorage.getItem('authToken')
    }
    Axios.get(`${apiUrl}get_all_folders`, {headers: headerInfo}).then((response) => {
      console.log(response.data);
      return response.data;
    }).then(data => {
      console.log(data[0])
      let folderNames = data.map((folder)=> {
        return(
          <li key={folder.name}> {folder.name} </li>
        )
      })
      this.setState({folders: folderNames})
    }).catch((error) => {
      console.log(error)
    })
  }

  render(){
    return (
      <div>
        {/* {(sessionStorage.getItem('role') === 'admin' || sessionStorage.getItem('role') === 'accountant') && <Redirect to='/admin'/>} */}
        <p>Home page!</p>
        <div>
          {this.state.folders}
        </div>
      </div>
    )
  }

}

export default Home; 