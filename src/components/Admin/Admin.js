import React from 'react';
// import Header from '../Header/Header';
import AdminWidget from './../../containers/AdminWidget/AdminWidget';
import EmployeeWidget from './../../containers/EmployeeWidget/EmployeeWidget';
import './admin.css';

const Admin = (props) => {
  return (
    <div className='admin-container'>
      <div className='header-container'>
        <div className='header-container-2'></div>
      </div>
      <div className='body-container'>
        <AdminWidget />
        <div className='folder-container'>
          <EmployeeWidget />
        </div>
      </div>
    </div>
  )
}

export default Admin; 