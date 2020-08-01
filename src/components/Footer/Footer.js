import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.base}>
        &copy; Fantastical Bestiary
      </footer>
    );
  }
}

export default Footer;
