import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// MATERIAL-UI
import {
  Button,
  Paper,
  Typography,
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
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
            >
              {creature.name}
            </Typography>

            <Typography
              variant="body1"
              component="div"
              gutterBottom
            >
              <strong>Type:</strong> {creature.type_label}
            </Typography>
            <Typography
              variant="body2"
              component="p"
            >
              {creature.physical_description}
            </Typography>
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
