import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}
export const ColumnsList: React.FC<Props> = ({ className = '', children }) => (
  <div className={cn(styles.root, className)}>
    <ul className={styles.inner}>
      {children}
    </ul>
  </div>
);
