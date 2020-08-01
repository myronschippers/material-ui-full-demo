import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import styles from './AlertMessages.module.css';

class AlertMessages extends Component {
  render() {
    return (
      <div className={styles.alertFrame}>
        {this.props.store.error.message &&
          <div className={styles.alertPanel}>
            {this.props.store.error.message}
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStoreToProps('error'))(AlertMessages);
