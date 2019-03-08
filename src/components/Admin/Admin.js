import React from 'react';
// import Header from '../Header/Header';
import AdminWidget from './../../containers/AdminWidget/AdminWidget';
import EmployeeWidget from './../../containers/EmployeeWidget/EmployeeWidget';
import {connect} from 'react-redux'
import './admin.css';

const Admin = (props) => {
  let adminContainer = 'body-container';
  if (props.employees === true) {
    adminContainer += 'admin-container-inactive';
  }
 
  return (

    <div className='admin-container'>
      <div className='header-container'>
        <div className='header-container-2'></div>
      </div>
      {props.employees === false &&
      <div className={adminContainer}>
        <AdminWidget />
        <div className='folder-container'>
          <EmployeeWidget />
        </div>
      </div>
      }
      {/* {props.employees === true &&
      
      } */}
    </div>
  )
}


export const mapStateToProps = state => ({
  employees: state.employees
})

export default connect(mapStateToProps, null)(Admin); 