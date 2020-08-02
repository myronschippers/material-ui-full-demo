import React, { Component } from 'react';

// MATERIAL-UI
import { Typography } from '@material-ui/core';

// CUSTOM COMPONENTS
import CreatureList from '../../CreatureList/CreatureList';
import AlertMessages from '../../AlertMessages/AlertMessages';

class Home extends Component {
  render() {
    return (
      <div>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
        >
          Master Bestiary
        </Typography>

        <CreatureList />

        <AlertMessages />
      </div>
    );
  }
}

export default Home;
