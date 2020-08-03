import React, { Component } from 'react';
import styles from './AppLayout.module.css';

// MATERIAL-UI
import { Container, Box } from '@material-ui/core';

// CUSTOM COMPONENTS
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class AppLayout extends Component {
  render() {
    return (
      <div className={styles.site}>
        <div className={styles['site-hd']}>
          <Header />
        </div>
        <div className={styles['site-bd']}>
          <Container >
            <Box pb={6}>
              {this.props.children}
            </Box>
          </Container>
        </div>
        <div className={styles['site-ft']}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AppLayout;
