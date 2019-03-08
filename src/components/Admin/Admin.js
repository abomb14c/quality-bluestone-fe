import React from 'react';
// import Header from '../Header/Header';
import AdminWidget from './../../containers/AdminWidget/AdminWidget';
import './admin.css';

const Admin = (props) => {
  return (
    <div className='admin-container'>
      <div className='header-container'>
        <div className='header-container-2'></div>
      </div>
      <div className='body-container'>
        <AdminWidget />
      </div>
    </div>
  )
}

export default Admin; 