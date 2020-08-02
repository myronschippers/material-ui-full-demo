import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// MATERIAL-UI
import {
  Button,
  Grid,
  Typography,
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
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
            >
              Creature Details
            </Typography>
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
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <div>
              {creatureDetails.img_path &&
                <img
                  src={`images/${creatureDetails.img_path}`}
                  alt={creatureDetails}
                />
              }
            </div>
          </Grid>

          <Grid item xs={7}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
            >
              {creatureDetails.name}
            </Typography>

            <Typography
              variant="h6"
              component="h4"
              gutterBottom
            >
              Type:
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
            >
              {creatureDetails.type_label}
            </Typography>

            <div>
              <Typography
                variant="h6"
                component="h4"
                gutterBottom
              >
                Physical Description:
              </Typography>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
              >
                {creatureDetails.physical_description}
              </Typography>

              <Typography
                variant="h6"
                component="h4"
                gutterBottom
              >
                Background:
              </Typography>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
              >
                {creatureDetails.background}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div>
              <CreatureAttributes attributes={creatureDetails.attributes} />
            </div>

            <div>
              <CreatureHabitats habitats={creatureDetails.habitats} />
            </div>
          </Grid>
        </Grid>

        <AlertMessages />
      </div>
    );
  }
}

export default connect(mapStoreToProps('creatureDetails'))(Details);
