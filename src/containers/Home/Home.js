import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {

  render(){
    return (
      <div>
        {(sessionStorage.getItem('role') === 'admin' || sessionStorage.getItem('role') === 'accountant') && <Redirect to='/admin'/>}
        <p>Home page!</p>
      </div>
    )
  }

}

export default Home; 