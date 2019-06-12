import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import DocumentIcon from '@material-ui/icons/FileCopy';
import AddFolderIcon from '@material-ui/icons/CreateNewFolder';
import AddEmployeeIcon from '@material-ui/icons/GroupAdd';
import EmployeeIcon from '@material-ui/icons/SupervisedUserCircle';
import { compose } from 'recompose';
import { updateEmployees, updateFiles, closeEmployees } from '../../actions';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  active: {
    color: theme.palette.secondary.main,
    backgroundColor: '#fdfdfd',
  },
  appBar: theme.overrides.MuiAppBar.root,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  filler: {
    width: drawerWidth,
  },
  link: {
    textDecoration: 'none',
    color: 'initial',
  },
  listItem: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

const LeftDrawer = ({ classes, handleClose, handleEmployees, handleFiles }) => {
  const createNavOptions = () => {
    const navOptions = [
      { text: 'Home', method: handleClose, icon: <HomeIcon key="icon" /> },
      {
        text: 'Documents',
        method: handleFiles,
        icon: <DocumentIcon key="icon" />,
      },
      {
        text: 'Employees',
        method: handleEmployees,
        icon: <EmployeeIcon key="icon" />,
      },
      {
        text: 'Add Folder',
        method: null,
        icon: <AddFolderIcon key="icon" />,
      },
      {
        text: 'Add Employee',
        method: null,
        icon: <AddEmployeeIcon key="icon" />,
      },
    ];

    return navOptions.map((option, index) => {
      const { text, method, icon } = option;
      return (
        <>
          <ListItem button className={classes.listItem} onClick={method}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} className={classes.listItemText} />
          </ListItem>
          {index === 2 && <Divider />}
        </>
      );
    });
  };

  return (
    <div className={classes.filler}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.appBar} />
        <List>{createNavOptions()}</List>
      </Drawer>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(closeEmployees()),
  handleEmployees: () => dispatch(updateEmployees()),
  handleFiles: () => dispatch(updateFiles()),
});

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  handleEmployees: PropTypes.func,
  handleFiles: PropTypes.func,
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(LeftDrawer);
