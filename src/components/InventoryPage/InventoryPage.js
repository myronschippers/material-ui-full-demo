import React, { Component } from 'react';

// CUSTOM COMPONENTS
import CreatureList from '../CreatureList/CreatureList';

class InventoryPage extends Component {
  render() {
    return (
      <div>
        <CreatureList />
      </div>
    );
  }
}

export default InventoryPage;