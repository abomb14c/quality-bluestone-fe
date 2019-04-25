import React, {Component} from 'react';
import './employee-folder.css';
import { Link, Redirect, Switch, withRouter } from 'react-router-dom';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import {connect} from 'react-redux';
import {closeEmployees} from '../../actions/updateAdmin/updateAdmin';

class EmployeeFolders extends Component {
  constructor(props){
    super(props)

    this.state = {
      active: false
    }
  }

  handleClick = () => {
    this.setState({
      active: true
    })
  }

  handleBack = (event) => {
    event.preventDefault();
    this.props.handleClose()
  }

  render() {
    return(
      <div className='employee-container'>
      <div className='back-nav'>
      <button
        onClick={this.handleBack}
        className='back-button'
        >
          back
      </button>
      </div>
      {this.state.active === false &&
        <div className='add-employee'>
          <h5>Add Employe</h5>
          <div 
            className='employee-button'
            onClick= {this.handleClick}
          >
          </div>
        </div>}
        {this.state.active === true && 
          <AddEmployeeForm />
        }
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(closeEmployees())
});


export default connect(null, mapDispatchToProps)(EmployeeFolders);