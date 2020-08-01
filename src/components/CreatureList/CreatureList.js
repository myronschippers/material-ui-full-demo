import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import CreatureListItem from '../CreatureListItem/CreatureListItem';

class CreatureList extends Component {
  render() {
    return (
      <div className="stackBlock">
        <h2>Available Creatures</h2>
        <ul className="blocks">
          {this.props.store.creatureListReducer.map((item, index) => {
            return (
              <li key={index}>
                <CreatureListItem
                  creature={item}
                  index={index}
                  {...this.props}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps('creatureListReducer'))(CreatureList);
