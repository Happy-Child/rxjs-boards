import React from 'react';
import { Typography } from '@mui/material';
import { Form as CreateBoardForm } from '@/features/create-board';
import styles from './styles.module.scss';

export const TopPanel: React.FC = () => {
  const count = 14;

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <CreateBoardForm />

        <div className={styles.wrapTexts}>
          <Typography>
            Boards count:
            {'\n'}
            <strong>{count}</strong>
          </Typography>

          <Typography>
            Tasks count:
            {'\n'}
            <strong>{count}</strong>
          </Typography>
        </div>
      </div>
    </div>
  );
};
