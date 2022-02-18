import React from 'react';
import { Form as CreateTaskForm } from '@/features/create-task';
import {
  useTasks, Task, TaskCardSmall,
} from '@/entities/task';
import {
  useCategories, ColumnsList, ColumnBody, ColumnHead, Column,
} from '@/entities/category';
import { TopPanel } from './top-panel';
import styles from './styles.module.scss';

const getTasksByCategory = <T extends Pick<Task, 'categoryId'>>(catId: number, tasks: T[]): T[] => (
  tasks.filter(({ categoryId }) => categoryId === catId)
);

export const DashboardPage: React.FC = () => {
  const tasks = useTasks();
  const categories = useCategories();

  return (
    <div className={styles.root}>
      <TopPanel />

      <ColumnsList className={styles.main}>
        {
          categories.map((cat) => (
            <Column key={cat.id}>
              <ColumnHead inputName={`category-${cat.id}-name`} />
              <ColumnBody>
                {
                  getTasksByCategory(cat.id, tasks).map((task) => (
                    <TaskCardSmall key={task.id} item={task} />
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
