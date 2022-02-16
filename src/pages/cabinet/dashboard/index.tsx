import React from 'react';
import { Form as CreateBoardForm } from '@/features/create-board';
import { Form as CreateTaskForm } from '@/features/create-task';
import { useTasks, TotalTaskCount, Task } from '@/entities/task';
import {
  useCategories, ColumnsList, ColumnBody, ColumnHead, Column,
} from '@/entities/category';
import styles from './styles.module.scss';

const getTasksByCategory = <T extends Pick<Task, 'categoryId'>>(catId: number, tasks: T[]): T[] => (
  tasks.filter(({ categoryId }) => categoryId === catId)
);

export const DashboardPage: React.FC = () => {
  const tasks = useTasks();
  const categories = useCategories();

  return (
    <div className={styles.root}>
      <div className={styles.wrapBox}>
        <div className={styles.topPanel}>
          <CreateBoardForm />
          <TotalTaskCount />
        </div>
      </div>

      <ColumnsList className={styles.main}>
        {
          categories.map((cat) => (
            <Column key={cat.id}>
              <ColumnHead inputName={`category-${cat.id}-name`} />
              <ColumnBody>
                {
                  getTasksByCategory(cat.id, tasks).map((task) => (
                    <h4 key={task.id}>{task.title}</h4>
                  ))
                }
              </ColumnBody>
              <CreateTaskForm />
            </Column>
          ))
        }
      </ColumnsList>
    </div>
  );
};
