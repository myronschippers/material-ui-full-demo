import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

// CUSTOM COMPONENTS
import AppLayout from '../AppLayout/AppLayout';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/creature-details/:id" component={Details} />
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
