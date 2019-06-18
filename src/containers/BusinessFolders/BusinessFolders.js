import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import uploadFiles from '../uploadFiles/uploadFiles';
// import UploadFiles from '../uploadFiles/uploadFiles';
import { AddFolders, FolderContainer } from '..';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { getData, apiEndpoints } from '../../apiCalls/apiCalls';
import { retrieveSessionStorage } from '../../util/component-helpers/componentHelpers';
// import { mapStateToProps } from '../../components/app/App';

const styles = theme => ({
  root: {
    width: '100%',
  },
  label: {
    margin: `0 0 ${theme.spacing(2)}px 0`,
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

  async componentDidMount() {
    await retrieveSessionStorage('folders', this.setState.bind(this));

    if (!this.state.folders.length) {
      const folderData = await getData('', apiEndpoints.get.folders);
      const folders = folderData.map(folder => folder.name);
      this.setState({ folders });
      sessionStorage.setItem('folders', JSON.stringify(folders));
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
        <Typography variant="h6" className={classes.label}>
          documents
        </Typography>
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
