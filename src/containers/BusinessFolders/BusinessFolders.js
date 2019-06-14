import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import uploadFiles from '../uploadFiles/uploadFiles';
// import UploadFiles from '../uploadFiles/uploadFiles';
import { AddFolders, FolderContainer } from '..';
import Axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { apiUrl } from '../../apiCalls/apiCalls';
import { retrieveSessionStorage } from '../../util/component-helpers/componentHelpers';
// import { mapStateToProps } from '../../components/app/App';

const styles = () => ({
  root: {
    width: '100%',
  },
});

class BusinessFolders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: [],
    };
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  // retrieveSessionStorage = () => {
  //   const folderNames = sessionStorage.getItem('folders');
  //   if (folderNames) this.setState({ folders: folderNames.split(',') });
  // };

  async componentDidMount() {
    const headerInfo = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Token': sessionStorage.getItem('authToken'),
    };

    await retrieveSessionStorage('folders', this.setState.bind(this));

    if (!this.state.folders.length) {
      Axios.get(`${apiUrl}get_all_folders`, { headers: headerInfo })
        .then(response => {
          return response.data;
        })
        .then(data => {
          let folderNames = data.map(folder => {
            return folder.name;
          });
          this.setState({ folders: folderNames });
          sessionStorage.setItem('folders', JSON.stringify(folderNames));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    const { folders } = this.state;
    const { folder, classes } = this.props;
    return (
      <div className={classes.root}>
        {folder.active === true && <Redirect to="/open-folder" />}
        {/* {active === false && (
          <div className="add-employee">
            <h5 className="add-folder-title">Add Folder</h5>
            <div className="business-button" onClick={this.handleClick} />
          </div>
        )}
        {active === true && (
          <div className="add-employee">
            <div className="folder-cancel-button-container">
              <button
                className="folder-form-cancel-button"
                onClick={this.handleClick}
              >
                X
              </button>
            </div>
            <AddFolders />
          </div>
        )} */}
        <div className="existing-folders">
          <FolderContainer folders={folders} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  folder: state.folder,
});

BusinessFolders.propTypes = {
  classes: PropTypes.object,
  folder: PropTypes.object,
};

export default compose(
  withRouter,
  connect(mapStateToProps),
  withStyles(styles)
)(BusinessFolders);
