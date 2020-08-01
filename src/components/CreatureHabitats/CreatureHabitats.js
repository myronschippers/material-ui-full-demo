import React, { Component } from 'react';

class CreatureHabitats extends Component {
  state = {
    isAdding: false,
  }

  render() {
    const {
      habitats
    } = this.props;

    return (
      <div>
        <h4>Habitats:</h4>
        <ul className="blocks">
          {habitats.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default CreatureHabitats;
