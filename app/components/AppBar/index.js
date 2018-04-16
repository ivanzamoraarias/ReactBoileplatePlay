/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
//import 'font-awesome/css/font-awesome.min.css';
import styles from './styles.css';

function AppBar() {
  return (
    <div className={styles.appBar}>
      <div
        className={styles.iconButton}
      >
        <FontAwesome 
          className={styles.icon}
          name="bars"  
        />..
      </div>
      <div
        className={styles.heading}
      >
        My Frist react redux app :D
      </div>
      <div
        className={styles.linkContainer}
      >
        log in 
      </div>
    </div>
  );
}

export default AppBar;
