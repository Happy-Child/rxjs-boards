import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}
export const ColumnsList: React.FC<Props> = ({ className = '', children }) => (
  <ul className={cn(styles.root, className)}>
    {children}
  </ul>
);
