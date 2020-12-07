import React, { Component } from 'react';
import styles from './Footer.module.css';

// MATERIAL-UI
import {
  Typography,
} from '@material-ui/core';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.base}>
        <Typography variant="body2" component="p">&copy; Fantastical Bestiary</Typography>
      </footer>
    );
  }
}

export default Footer;
