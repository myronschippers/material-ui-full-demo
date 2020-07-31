import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatureListItem extends Component {
  handleClickDelete = () => {
    // this.props.deleteCallback(this.props.index);
    this.props.dispatch({
      type: 'DELETE_CREATURE_FROM_LIST',
      payload: this.props.index,
    });
  }

  handleClickAddCart = () => {
    // this.props.deleteCallback(this.props.index);
    this.props.dispatch({
      type: 'ADD_TO_CHECKOUT',
      payload: this.props.creature,
    });
  }

  render() {
    const {
      creature,
    } = this.props;

    return (
      <div className="card">
          <div className="card-bd">
            <h4 className="cardHdg">{creature.name}</h4>
            <p className="cardSubHdg">Origin: {creature.origin}</p>
          </div>
          <div className="card-action">
            {this.props.manage && <button
              className="btn"
              onClick={this.handleClickDelete}
            >
              DELETE
            </button>}
            {!this.props.manage && <button
              className="btn"
              onClick={this.handleClickAddCart}
            >
              ADD TO CART
            </button>}
          </div>
      </div>
    );
  }
}

export default connect()(CreatureListItem);
