import React, { Component } from 'react';

class CreatureAttributes extends Component {
  state = {
    isAdding: false,
  }

  render() {
    const {
      attributes,
    } = this.props;

    return (
      <div>
        <h4>Attributes:</h4>
        <ul className="blocks">
          {attributes.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default CreatureAttributes;
