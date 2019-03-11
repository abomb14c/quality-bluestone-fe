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
      active: true
    })
  }

  render() {
    return(
      <div className='employee-container'>
      {this.state.active === false &&
        <div className='add-employee'>
          <h5>Add Employee</h5>
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

export default EmployeeFolders;