import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type taskObj } from './taskObj.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../Tasks.service';

@Component({
  selector: 'app-user-task',
  imports: [CardComponent , DatePipe] ,
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
})
export class UserTaskComponent {
  @Input({required: true}) task!: taskObj;

  constructor( private taskService : TaskService) { 
    }

  onCompleteTask(){
    this.taskService.removeTask(this.task.id)
  }
}
