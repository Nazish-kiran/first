import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskObj } from './taskObj.model';

@Component({
  selector: 'app-user-task',
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
})
export class UserTaskComponent {
  @Input({required: true}) task!: taskObj;
  @Output() complete = new EventEmitter <string>()

  onCompleteTask(){
       this.complete.emit(this.task.id)
       console.log("done 1");
       
  }
}
