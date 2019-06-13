import React, { Component } from 'react';
// import './folder-widget.css';
// import './business-folders.css';
import { connect } from 'react-redux';
// import { mapDispatchToProps } from '../../containers/EmployeeWidget/EmployeeWidget';
import PropTypes from 'prop-types';
import { Card, Button, Typography, withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { updateFolder } from '../../actions';

const styles = theme => ({
  root: {
    margin: theme.spacing(2),
    width: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 148,
    padding: theme.spacing(2),
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
        <Button size="small" color="primary" onClick={() => openFolder(folder)}>
          Open
        </Button>
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
