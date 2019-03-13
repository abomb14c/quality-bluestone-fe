import React from 'react';
// import Header from '../Header/Header';
import AdminWidget from './../../containers/AdminWidget/AdminWidget';
import EmployeeWidget from './../../containers/EmployeeWidget/EmployeeWidget';
import EmployeeFolders from '../../containers/EmployeeFolders/EmployeeFolders';
import BusinessWidget from '../../containers/BusinessWidget/BusinessWidget';
import BusinessFolders from '../../containers/BusinessFolders/BusinessFolders';
import {connect} from 'react-redux';
import './admin.css';

const Admin = (props) => {

  return (

    <div className='admin-container'>
      <div className='header-container'>
        <div className='header-container-2'></div>
      </div>
      {props.active === '' &&
      <div className='body-container'>
        {/* <AdminWidget /> */}
        <div className='folder-container'>
          <EmployeeWidget />
          <BusinessWidget />
        </div>
      </div>
      }
      {props.active === 'employees' &&
          <EmployeeFolders />
      }
      {props.active === 'files' &&
          <BusinessFolders />
      }
    </div>
  )
}


export const mapStateToProps = state => ({
  active: state.active
})

export default connect(mapStateToProps, null)(Admin); 