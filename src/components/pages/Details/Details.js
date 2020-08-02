import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// MATERIAL-UI
import {
  Button,
  Grid,
} from '@material-ui/core';

// CUSTOM COMPONENTS
import AlertMessages from '../../AlertMessages/AlertMessages';
import CreatureAttributes from '../../CreatureAttributes/CreatureAttributes';
import CreatureHabitats from '../../CreatureHabitats/CreatureHabitats';

class Details extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CREATURE_DETAILS',
      payload: parseInt(this.props.match.params.id),
    });
  }

  handleClickBACK = (event) => {
    this.props.history.push('/');
  }

  handleClickToEdit = (event) => {
    if (!this.props.store.creatureDetails.id) {
      return; // exit early if the id is not available
    }

    this.props.history.push(`/creature-edit/${this.props.store.creatureDetails.id}`);
  }

  render() {
    const {
      creatureDetails
    } = this.props.store;

    return (
      <div>
        <Grid
          container
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <h2>Creature Details</h2>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClickBACK}
            >
              BACK TO LIST
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClickToEdit}
            >
              EDIT
            </Button>
          </Grid>
        </Grid>
        <div>
          <h3>{creatureDetails.name}</h3>
          <p><strong>Type:</strong> {creatureDetails.type_label}</p>
          <div>
            <div>
              {creatureDetails.img_path &&
                <img
                  src={`images/${creatureDetails.img_path}`}
                  alt={creatureDetails}
                />
              }
            </div>
            <div>
              <p><strong>Physical Description:</strong> {creatureDetails.physical_description}</p>
              <p><strong>Background:</strong> {creatureDetails.background}</p>
            </div>
          </div>

          <div>
            <CreatureAttributes attributes={creatureDetails.attributes} />
          </div>

          <div>
            <CreatureHabitats habitats={creatureDetails.habitats} />
          </div>
        </div>

        <AlertMessages />
      </div>
    );
  }
}

export default connect(mapStoreToProps('creatureDetails'))(Details);
