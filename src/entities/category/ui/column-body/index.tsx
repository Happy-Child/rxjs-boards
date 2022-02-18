import React from 'react';
import styles from './styles.module.scss';

export const ColumnBody: React.FC = ({ children }) => (
  <ul className={styles.root}>{children}</ul>
);
