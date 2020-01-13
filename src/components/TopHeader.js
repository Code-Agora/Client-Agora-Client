import React from 'react';

import styles from '../cssModules/TopHeader.module.css'; // Need to put .module for CSS module files

export const TopHeader = () => (
  <div className={ styles.header }>
    <a href="/" className={ styles.brand }>Code Agora</a>
    <input type="text" placeholder="Search.." className={ styles.searchbar }></input>
  </div>
)