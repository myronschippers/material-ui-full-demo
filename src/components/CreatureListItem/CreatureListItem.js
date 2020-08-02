import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// MATERIAL-UI
import {
  Button,
  Paper
} from '@material-ui/core';

class CreatureListItem extends Component {

  handleClickDetails = () => {
    // navigate to creature details page
    this.props.history.push(`/creature-details/${this.props.creature.id}`);
  }

  render() {
    const {
      creature,
    } = this.props;

    return (
      <Paper>
          <div className="card-bd">
            <h4 className="cardHdg">{creature.name}</h4>
            <p><strong>Type:</strong> {creature.type_label}</p>
            <p className="cardSubHdg">{creature.physical_description}</p>
          </div>
          <div className="card-action">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClickDetails}
            >
              SEE DETAILS
            </Button>
          </div>
      </Paper>
    );
  }
}

export default connect()(withRouter(CreatureListItem));
