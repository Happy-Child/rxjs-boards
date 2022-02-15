import React from 'react';
import styles from './styles.module.scss';

export const Column: React.FC = ({ children }) => (
  <li className={styles.root}>
    {children}
  </li>
);
