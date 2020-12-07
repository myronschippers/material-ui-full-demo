import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import { Grid } from '@material-ui/core';

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
        <Grid
          container
          spacing={3}
          alignItems="flex-start"
        >
          {this.props.store.creatureList.map((item, index) => {
            return (
              <Grid item xs={4} key={index}>
                <CreatureListItem
                  creature={item}
                  index={index}
                  {...this.props}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps('creatureList'))(CreatureList);
