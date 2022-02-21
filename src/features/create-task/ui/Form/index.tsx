import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { Check, Clear, Add } from '@mui/icons-material';
import { EditableText } from '@/shared/ui';
import styles from './styles.module.scss';

export const Form: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleApply = () => { setIsActive(true); };

  const handleCancel = () => { setIsActive(false); };

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
              <EditableText className={styles.field} name="created-task" />
              <ButtonGroup className={styles.wrapBtns}>
                <Button color="success" type="submit" onClick={handleApply}>
                  <Check />
                </Button>
                <Button color="error" type="button" onClick={handleCancel}>
                  <Clear />
                </Button>
              </ButtonGroup>
            </form>
          )
          : (
            <Button fullWidth variant="outlined" type="button" onClick={handleApply}>
              <Add />
            </Button>
          )
      }

    </div>
  );
};
