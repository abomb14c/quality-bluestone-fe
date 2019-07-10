import React, { Component } from 'react';
import { IconButton, Menu, MenuItem, withStyles } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { DeleteFolder } from '..';

const styles = theme => ({
  root: {},
});

class FolderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = e => {
    this.stopPropagation(e);
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = e => {
    this.stopPropagation(e);
    this.setState({ anchorEl: null });
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  render() {
    const { anchorEl } = this.state;
    const { folder } = this.props;

    return (
      <>
        <IconButton onClick={this.handleClick}>
          <MoreIcon
          // onClick={this.handleDialog(true)}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem>
            <DeleteFolder folder={folder} handleClose={this.handleClose} />
          </MenuItem>
        </Menu>
      </>
    );
  }
}

export default withStyles(styles)(FolderMenu);
