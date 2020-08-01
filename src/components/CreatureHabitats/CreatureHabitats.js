import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatureHabitats extends Component {
  state = {
    isAdding: false,
  }

  handleClickDeleteHabitat = (habitat) => (event) => {
    this.props.dispatch({
      type: 'DELETE_CREATURE_HABITAT',
      payload: habitat,
    });
  }

  render() {
    const {
      habitats,
      editable,
    } = this.props;

    return (
      <div>
        <h4>Habitats:</h4>
        <ul className="blocks">
          {habitats.map((item, index) => {
            return (
              <li key={index}>
                {item}
                {editable &&
                  <button
                    type="button"
                    onClick={this.handleClickDeleteHabitat(item)}
                  >
                    x
                  </button>
                }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect()(CreatureHabitats);
