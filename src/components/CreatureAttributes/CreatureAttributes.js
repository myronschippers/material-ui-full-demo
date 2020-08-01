import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatureAttributes extends Component {
  state = {
    isAdding: false,
  }

  handleClickDeleteAttr = (attribute) => (event) => {
    this.props.dispatch({
      type: 'DELETE_CREATURE_ATTRIBUTE',
      payload: attribute,
    });
  }

  render() {
    const {
      attributes,
      editable,
    } = this.props;

    return (
      <div>
        <h4>Attributes:</h4>
        <ul className="blocks">
          {attributes.map((item, index) => {
            return (
              <li key={index}>
                {item}
                {editable &&
                  <button
                    type="button"
                    onClick={this.handleClickDeleteAttr(item)}
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

export default connect()(CreatureAttributes);
