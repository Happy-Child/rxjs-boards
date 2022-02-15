import React from 'react';
import { Form } from '@/features/create-board';
import { useTasks, TotalTaskCount, Task } from '@/entities/task';
import {
  useCategories, ColumnsList, ColumnBody, ColumnHead, Column,
} from '@/entities/category';
import styles from './styles.module.scss';

const getTasksByCategory = <T extends Pick<Task, 'categoryId'>>(catId: number, tasks: T[]): T[] => (
  tasks.filter(({ categoryId }) => categoryId === catId)
);

// Разделить на фитчи?

export const DashboardPage: React.FC = () => {
  const tasks = useTasks();
  const categories = useCategories();

  return (
    <div className={styles.root}>
      <div className={styles.topPanel}>
        <Form />
        <TotalTaskCount />
      </div>

      <ColumnsList className={styles.main}>
        {
          categories.map((cat) => (
            <Column key={cat.id}>
              <ColumnHead />
              <ColumnBody>
                {
                  getTasksByCategory(cat.id, tasks).map((task) => (
                    <h4 key={task.id}>{task.title}</h4>
                  ))
                }
              </ColumnBody>
            </Column>
          ))
        }
      </ColumnsList>
    </div>
  );
};
