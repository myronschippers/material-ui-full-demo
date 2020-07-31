import React, { Component } from 'react';

// CUSTOM COMPONENTS
import CreatureList from '../CreatureList/CreatureList';
import CreatureForm from '../CreatureForm/CreatureForm';

class ManageInventoryPage extends Component {
  render() {
    return (
      <div>
        <CreatureForm />
        <CreatureList manage />
      </div>
    );
  }
}

export default ManageInventoryPage;