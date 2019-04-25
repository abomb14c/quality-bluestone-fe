import React, {Component} from 'react';
import './employee-folder.css';

import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';

class EmployeeFolders extends Component {
  constructor(props){
    super(props)

    this.state = {
      active: false
    }
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return(
      <div className='employee-container'>
      {this.state.active === false &&
        <div className='add-employee'>
          <h5 className='add-employee-title'>Add Employee</h5>
          <div 
            className='employee-button'
            onClick= {this.handleClick}
          >
          </div>
        </div>}
        {this.state.active === true &&
        <div className='add-employee-form-container-1'>
         <button
         className='employee-form-cancel-button'
          onClick={this.handleClick}
         >
         X
         </button>
          <AddEmployeeForm />
          </div>
        }
      </div>
    )
  }
}

export default EmployeeFolders;