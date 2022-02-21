import React from 'react';
import { IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { EditableText } from '@/shared/ui';
import styles from './styles.module.scss';

interface Props {
  inputName: string;
}
export const ColumnHead: React.FC<Props> = ({ inputName }) => (
  <div className={styles.root}>
    <EditableText className={styles.field} name={inputName} />
    <IconButton size="small"><Settings /></IconButton>
  </div>
);
