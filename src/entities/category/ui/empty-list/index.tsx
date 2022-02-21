import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from './styles.module.scss';

interface Props {
  handleCreateBoard: (e: React.MouseEvent<HTMLButtonElement>) => unknown,
}
export const EmptyList: React.FC<Props> = ({ handleCreateBoard }) => (
  <div className={styles.root}>
    <Typography variant="h4" className={styles.title}>Board empty :(</Typography>
    <Button variant="contained" color="success" onClick={handleCreateBoard}>Create board</Button>
  </div>
);
