import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

// CUSTOM COMPONENTS
import AppLayout from '../AppLayout/AppLayout';
import ManageInventoryPage from '../ManageInventoryPage/ManageInventoryPage';
import InventoryPage from '../InventoryPage/InventoryPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';

class App extends React.Component {
  // state = {
  //   creatureList: [
  //     {
  //       name: 'Dragon',
  //       origin: 'China',
  //     },
  //     {
  //       name: 'Kitsune',
  //       origin: 'Japan',
  //     },
  //   ],
  // }

  // addCreature = (newCreature) => {
  //   this.setState({
  //     creatureList: [
  //       ...this.state.creatureList,
  //       newCreature,
  //     ],
  //   })
  // }

  // deleteCreature = (creatureIndex) => {
  //   const listWithoutCreature = this.state.creatureList.filter((item, index) => {
  //     return creatureIndex !== index;
  //   });

  //   this.setState({
  //     creatureList: listWithoutCreature,
  //   });
  // }

  render() {
    // toggle things
    return (
      <Router>
        <AppLayout>
          {/* ADDITIONAL CONTENT */}
          <Route exact path="/manage-inventory" component={ManageInventoryPage} />
          <Route exact path="/" component={InventoryPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </AppLayout>
      </Router>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    secondReducer: store.secondReducer,
  }
};
export default connect(mapStoreToProps)(App);
