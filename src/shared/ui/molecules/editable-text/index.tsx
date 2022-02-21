import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  name: string;
  className?: string;
}
export const EditableText: React.FC<Props> = ({ className = '', name }) => {
  const [isEdit] = React.useState(false);
  const [val] = React.useState('test val test va testtest va test va v v test va');

  return (
    <label
      htmlFor={name}
      className={cn(styles.root, className, { [styles.editMode]: isEdit })}
    >
      <input
        className={styles.input}
        disabled={!isEdit}
        value={val}
        name={name}
        type="text"
      />
    </label>
  );
};
