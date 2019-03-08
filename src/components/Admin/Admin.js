import React from 'react';
// import Header from '../Header/Header';
import AdminWidget from './../../containers/AdminWidget/AdminWidget';
import EmployeeWidget from './../../containers/EmployeeWidget/EmployeeWidget';
import EmployeeFolders from '../../containers/EmployeeFolders/EmployeeFolders';
import {connect} from 'react-redux'
import './admin.css';

const Admin = (props) => {

  return (

    <div className='admin-container'>
      <div className='header-container'>
        <div className='header-container-2'></div>
      </div>
      {props.employees === false &&
      <div className='body-container'>
        <AdminWidget />
        <div className='folder-container'>
          <EmployeeWidget />
        </div>
      </div>
      }
      {props.employees === true &&
      
          <EmployeeFolders />
        
      }
    </div>
  )
}


export const mapStateToProps = state => ({
  employees: state.employees
})

export default connect(mapStateToProps, null)(Admin); 