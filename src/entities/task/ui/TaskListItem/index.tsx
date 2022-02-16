import React, { MouseEvent } from 'react';
import { Typography } from '@mui/material';
import { Task } from '../../model';
import styles from './styles.module.scss';

interface Props {
  item: Task,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => unknown,
}
export const TaskListItem: React.FC<Props> = ({ item, onClick }) => (
  <button onClick={onClick} type="button" className={styles.root}>
    <Typography className={styles.title}>{item.title}</Typography>
  </button>
);
