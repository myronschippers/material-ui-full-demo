import React, { Component } from 'react';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import CheckoutList from '../CheckoutList/CheckoutList';

class CheckoutPage extends Component {
  handleCheckout = () => {
    this.props.dispatch({
      type: 'CLEAR_CART',
    })
  }

  render() {
    return (
      <div>
        CHECKOUT
        <CheckoutList />

        <button className="btn" onClick={this.handleCheckout}>CHECKOUT NOW</button>
      </div>
    );
  }
}

export default connect()(CheckoutPage);