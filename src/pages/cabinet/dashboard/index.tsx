import React from 'react';
import { Form as CreateTaskForm } from '@/features/create-task';
import {
  useTasks, Task, TaskCardSmall,
} from '@/entities/task';
import { EmptyWrapper } from '@/shared/ui';
import {
  useCategories, ColumnsList, ColumnBody, ColumnHead, Column, EmptyList,
} from '@/entities/category';
import { TopPanel } from './top-panel';
import styles from './styles.module.scss';

const getTasksByCategory = <T extends Pick<Task, 'categoryId'>>(catId: number, tasks: T[]): T[] => (
  tasks.filter(({ categoryId }) => categoryId === catId)
);

export const DashboardPage: React.FC = () => {
  const tasks = useTasks();
  const categories = useCategories();

  const handleCreateBoard = () => {
    console.log('handleCreateBoard');
  };

  const isEmpty = categories.length === 0;

  return (
    <div className={styles.root}>
      <TopPanel />

      <EmptyWrapper
        isEmpty={isEmpty}
        renderWhenEmpty={<EmptyList handleCreateBoard={handleCreateBoard} />}
      >
        <ColumnsList>
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
      </EmptyWrapper>
    </div>
  );
};
