import React from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { Check, Clear } from '@mui/icons-material';
import styles from './styles.module.scss';

export const Form: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleCreateTask = () => { setIsActive(true); };

  const handleClear = () => { setIsActive(false); };

  const handleSubmit = (e: React.FormEvent<unknown>): void => {
    e.preventDefault();
    console.log('Submit');
  };

  return (
    <div className={styles.root}>
      {
        isActive
          ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <TextField className={styles.field} size="small" />
              <IconButton color="success" type="submit"><Check /></IconButton>
              <IconButton color="error" type="button" onClick={handleClear}>
                <Clear />
              </IconButton>
            </form>
          )
          : (
            <Button variant="contained" type="button" onClick={handleCreateTask}>
              Create task
            </Button>
          )
      }

    </div>
  );
};
