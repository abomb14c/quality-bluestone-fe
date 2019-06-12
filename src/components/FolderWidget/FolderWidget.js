import React, { Component } from 'react';
// import './folder-widget.css';
// import './business-folders.css';
import { connect } from 'react-redux';
// import { mapDispatchToProps } from '../../containers/EmployeeWidget/EmployeeWidget';
import { updateFolder } from '../../actions';
import { Card, Button, Typography, withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 2}px 0`,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

class FolderWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  render() {
    const { classes, folder, openFolder } = this.props;

    return (
      <Card className={classes.root}>
        <Typography>{folder}</Typography>
        {/* <p className="folder-title">{folder}</p> */}
        <Button size="small" color="primary" onClick={() => openFolder(folder)}>
          Open
        </Button>
        {/* <div className="open-button" onClick={() => openFolder(folder)} /> */}
      </Card>
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
