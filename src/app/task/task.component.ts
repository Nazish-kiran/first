import { Component, input, Input } from '@angular/core';
import { UserTaskComponent } from './user-task/user-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type newTaskObj } from './new-task/submit.model';
@Component({
  selector: 'app-task',
  imports: [UserTaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) Userid!: string;
  @Input({ required: true }) names!: string;
  isAddingTask = false;

  task = [
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
  get selectedUserTask() {
    return this.task.filter((tasks) => {
      return tasks.userId === this.Userid;
    });
  }
  onCompleteTask(id: string) {
    this.task = this.task.filter((tasks) => {
      console.log(tasks.id);

      return tasks.id !== id;
    });
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddtask(taskData : newTaskObj){
    this.task.unshift({
      id: Math.random().toString(),
      userId: this.Userid,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    })
    this.isAddingTask = false;
  }
}
