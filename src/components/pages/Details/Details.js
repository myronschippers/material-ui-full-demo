import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CREATURE_DETAILS',
      payload: parseInt(this.props.match.params.id),
    });
  }

  render() {
    return (
      <div>
        <h2>Creature Details</h2>
      </div>
    );
  }
}

export default connect()(Details);
