import React, { Component } from 'react';
import styles from './AppLayout.module.css';
import { Link } from 'react-router-dom'

// CUSTOM COMPONENTS
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class AppLayout extends Component {
  render() {
    return (
      <div className={styles.site}>
        <div className={styles['site-hd']}>
          <Header />
          <Link to="/checkout">Checkout</Link>
        </div>
        <div className={styles['site-bd']}>
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <div className={styles['site-ft']}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AppLayout;
