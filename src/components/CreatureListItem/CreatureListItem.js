import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
      <div className="card">
          <div className="card-bd">
            <h4 className="cardHdg">{creature.name}</h4>
            <p><strong>Type:</strong> {creature.type_label}</p>
            <p className="cardSubHdg">{creature.physical_description}</p>
          </div>
          <div className="card-action">
            <button
              className="btn"
              onClick={this.handleClickDetails}
            >
              SEE DETAILS
            </button>
          </div>
      </div>
    );
  }
}

export default connect()(withRouter(CreatureListItem));
