import React, { Component } from 'react';
import CreatureList from '../../CreatureList/CreatureList';
import AlertMessages from '../../AlertMessages/AlertMessages';

class Home extends Component {
  render() {
    return (
      <div>
        <CreatureList />

        <AlertMessages />
      </div>
    );
  }
}

export default Home;
