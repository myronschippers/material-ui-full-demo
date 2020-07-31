import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const putStoreOnProps = (store) => {
  return {
    store: store,
  };
};
export default connect(putStoreOnProps)(CreatureList);
