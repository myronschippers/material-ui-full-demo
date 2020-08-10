import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

// MATERIAL-UI
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import {
  amber,
  lightGreen,
  deepOrange,
  lime,
  lightBlue,
  green,
} from '@material-ui/core/colors';

// Record Theme Colors
// drk teal - #014F56
// lt teal - #4EA09E
// amber - #FB9A34
// burnt umber - #BF4904
// beige - #FE7942
// lt tan - #FAD7AC

// CUSTOM COMPONENTS
import AppLayout from '../AppLayout/AppLayout';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import Edit from '../pages/Edit/Edit';

const newLightGreen = lightGreen['A100'];

const customTheme = createMuiTheme({
  // theme settings
  palette: {
    // type: 'dark',
    primary: {
      main: '#FB9A34',
    },
    secondary: {
      // light: '',
      main: '#014F56',
      // dark: '',
      // contrastText: '',
    },
    // error: deepOrange,
    // warning: lime,
    info: { main: '#FE7942' },
    // success: green,
  }
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <Router>
          <AppLayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/creature-details/:id" component={Details} />
            <Route exact path="/creature-edit/:id" component={Edit} />
          </AppLayout>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    secondReducer: store.secondReducer,
  }
};
export default connect(mapStoreToProps)(App);
