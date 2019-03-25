import React, {Component} from 'react';
import './folder-widget.css';
// import './business-folders.css';

export class FolderWidget extends Component {
  constructor(props){
  super(props)

  this.state = {

  }
  }

  render(){
    return (
      <div className='folder'>
        <p className='folder-title'>{this.props.folder}</p>
        <div className='open-button'>
        </div>
      </div>
    )
  }
}