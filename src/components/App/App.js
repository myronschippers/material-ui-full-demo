import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

// MATERIAL-UI
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

//
// Record Theme Colors
// ------------------------------
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

const customTheme = createMuiTheme({
  // theme settings
  palette: {
    primary: {
      main: '#FB9A34',
    },
    secondary: {
      // light: '',
      main: '#014F56',
      // dark: '',
      // contrastText: '',
    },
    info: { main: '#FE7942' },
  },
  typography: {
    h1: { color: '#BF4904', fontWeight: 'bold' },
    h2: { color: '#BF4904', fontWeight: 'bold' },
    h3: { color: '#BF4904', fontWeight: 'bold' },
    h4: { color: '#BF4904', fontWeight: 'bold' },
    h5: { color: '#BF4904', fontWeight: 'bold' },
    h6: { color: '#BF4904', fontWeight: 'bold' },
    body1: { color: '#333333' },
    body2: { color: '#333333' },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '0',
        fontWeight: 'bold',
      },
      contained: {
        border: '2px solid #333333',
        boxShadow: '3px 3px 0 #014F56',
        '&:hover': {
          boxShadow: '1px 1px 0 #014F56',
        }
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#4EA09E',
        border: '2px solid #333333',
      },
      rounded: {
        borderRadius: '0',
      },
      elevation1: {
        boxShadow: '4px 3px 0 #014F56',
      },
      elevation2: {
        boxShadow: '4px 4px 0 #014F56',
      },
      elevation3: {
        boxShadow: '4px 5px 0 #014F56',
      },
    },
    MuiCard: {
      root: {
        marginTop: '30px',
        backgroundColor: '#FB9A34',
        overflow: 'visible',
      }
    },
    MuiCardHeader: {
      root: {
        margin: '-30px auto 0',
        backgroundColor: '#4EA09E',
        border: '2px solid #333333',
        boxSizing: 'border-box',
        width: '90%',
        fontWeight: 'bold',
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '0',
      },
      notchedOutline: {
        borderColor: '#333333',
      },
    }
  },
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
