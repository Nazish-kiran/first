import { Component, input, Input } from '@angular/core';
import { UserTaskComponent } from './user-task/user-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type newTaskObj } from './new-task/submit.model';
import { TaskService } from './Tasks.service';
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

  constructor( private taskService : TaskService) {

  }
  get selectedUserTask() {
    return this.taskService.getUserTasks(this.Userid);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddtask(taskData: newTaskObj) {

    console.log('task added');

    this.isAddingTask = false;
  }
}
