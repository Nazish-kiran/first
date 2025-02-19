import { Component, Input } from '@angular/core';
import { taskObj } from './taskObj.model';

@Component({
  selector: 'app-user-task',
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
})
export class UserTaskComponent {
  @Input({required: true}) task!: taskObj;
}
