import React from 'react';
import styles from './styles.module.scss';

export const ColumnBody: React.FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
