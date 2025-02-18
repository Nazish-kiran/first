import { Component, Input } from '@angular/core';
import { UserTaskComponent } from './user-task/user-task.component';

@Component({
  selector: 'app-task',
  imports: [UserTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() names: string | undefined;

  task = [{
    id:'t1',
    userId:'u1',
    title:'Master Angular',
    summary:'Learn all the basic and advance features of angular and how to use them',
    dueDate:'2025-12-31'
  }];
}
