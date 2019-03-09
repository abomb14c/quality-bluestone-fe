import React, {Component} from 'react';
import './employee-folder.css';

class EmployeeFolders extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <div className='employee-container'>
        <div className='add-employee'>
          <h5>Add Employee</h5>
          <div className='employee-button'></div>
        </div>
      </div>
    )
  }
}

export default EmployeeFolders;