import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskObj } from './submit.model';
import { TaskService } from '../Tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<newTaskObj>();

  private taskServices = inject(TaskService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    console.log('submitted');
    this.taskServices.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
  }
}
