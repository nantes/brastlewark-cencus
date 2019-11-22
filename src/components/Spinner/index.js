import React from 'react';
import styles from './styles.css';
import loadingImage from './loading.gif';

export default () => (
  <div className={styles.loading}>
    <img src={loadingImage} alt="" />
  </div>
);
