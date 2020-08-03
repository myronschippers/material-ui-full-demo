import React, { Component } from 'react';

// MATERIAL-UI
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from '@material-ui/core';
import {
  Pets
} from '@material-ui/icons';

// CUSTOM COMPONENT
import OpenBookIcon from './OpenBookIcon';

class Header extends Component {
  render() {
    return (
      <Box mb={4}>
        <AppBar position="static">
          <Toolbar>
            <Box mr={2}>
              <OpenBookIcon style={{ fontSize: 40 }} />
            </Box>
            <Box mr={1}>
              <Typography variant="h5" color="inherit">Fantastical Bestiary</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Header;