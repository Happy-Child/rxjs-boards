import React from 'react';
import { EditableText } from '@/shared/ui';
import styles from './styles.module.scss';

interface Props {
  inputName: string;
}
export const ColumnHead: React.FC<Props> = ({ inputName }) => (
  <div className={styles.root}>
    <EditableText name={inputName} />
  </div>
);
