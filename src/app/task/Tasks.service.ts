import { inject, Injectable } from '@angular/core';
import { newTaskObj } from './new-task/submit.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private task = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks(userId: string) {
    return this.task.filter((tasks) => {
      return tasks.userId === userId;
    });
  }
  addTask(taskData: newTaskObj, userId: string) {
    this.task.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
  }
  removeTask(id: string) {
    this.task = this.task.filter((tasks) => {
      console.log(tasks.id);

      return tasks.id !== id;
    });
  }
}
