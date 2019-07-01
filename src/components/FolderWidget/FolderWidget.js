import React, { Component } from 'react';
// import './folder-widget.css';
// import './business-folders.css';
import { connect } from 'react-redux';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
// import { mapDispatchToProps } from '../../containers/EmployeeWidget/EmployeeWidget';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button,
  Typography,
  withStyles,
} from '@material-ui/core';
import { getData, apiEndpoints } from '../../apiCalls/apiCalls';
import { OpenFolder } from '../../containers';
import { updateFolder } from '../../actions';

const styles = theme => ({
  root: {
    width: '100%',
  },
  summary: {
    // margin: theme.spacing(2),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
});

class FolderWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      files: [],
    };
  }

  async componentDidMount() {
    if (!this.state.files.length) {
      const folderData = { folder_name: this.props.folder };
      const files = await getData(folderData, apiEndpoints.get.files);
      console.log(files, this.props.folder);
      this.setState({ files: files.file_info });
    }
  }

  toggleExpansion = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  render() {
    const { classes, folder, openFolder } = this.props;
    const { expanded, files } = this.state;

    return (
      <ExpansionPanel
        className={classes.root}
        expanded={expanded}
        onClick={this.toggleExpansion}
      >
        <ExpansionPanelSummary>
          <div className={classes.summary}>
            <Typography>{folder}</Typography>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <OpenFolder files={files} folder={folder} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  openFolder: folder => dispatch(updateFolder(folder)),
});

FolderWidget.propTypes = {
  classes: PropTypes.object,
  openFolder: PropTypes.func,
  folder: PropTypes.string,
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(FolderWidget);
