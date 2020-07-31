import React, { Component } from 'react';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS


class CheckoutList extends Component {
  render() {
    return (
      <div>
        {this.props.store.checkoutReducer.map((item, index) => {
          return <p key={index}>{item.name}</p>
        })}
      </div>
    );
  }
}


const putStoreOnProps = (store) => {
  return {
    store: store,
  };
};
export default connect(putStoreOnProps)(CheckoutList);