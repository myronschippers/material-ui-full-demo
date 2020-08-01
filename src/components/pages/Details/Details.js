import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import AlertMessages from '../../AlertMessages/AlertMessages';

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
        <div>
          <h2>Creature Details</h2>
          <button
            className="btn"
            onClick={this.handleClickBACK}
          >
            BACK TO LIST
          </button>
          <button
            className="btn"
            onClick={this.handleClickToEdit}
          >
            EDIT
          </button>
        </div>
        <div>
          <h3>{creatureDetails.name}</h3>
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
            <h4>Attributes:</h4>
            <ul className="blocks">
              {creatureDetails.attributes.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>

          <div>
            <h4>Habitats:</h4>
            <ul className="blocks">
              {creatureDetails.habitats.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </div>

        <AlertMessages />
      </div>
    );
  }
}

export default connect(mapStoreToProps('creatureDetails'))(Details);
