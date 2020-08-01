import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import CreatureListItem from '../CreatureListItem/CreatureListItem';

class CreatureList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CREATURES',
    });
  }

  render() {
    return (
      <div className="stackBlock">
        <ul className="blocks">
          {this.props.store.creatureList.map((item, index) => {
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

export default connect(mapStoreToProps('creatureList'))(CreatureList);
