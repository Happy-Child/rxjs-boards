import React from 'react';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import { Settings, Edit } from '@mui/icons-material';
import { EditableText } from '@/shared/ui';
import { Task } from '../../model';
import styles from './styles.module.scss';

interface Props {
  item: Task,
}
export const TaskCardSmall: React.FC<Props> = ({ item }) => (
  <li className={cn(styles.root, { [styles.activeActions]: false })}>
    <EditableText name="task-title" />
    <div className={styles.actionsBtns}>
      <IconButton size="small" color="primary"><Settings /></IconButton>
      <IconButton size="small" color="primary"><Edit /></IconButton>
    </div>
  </li>
);
