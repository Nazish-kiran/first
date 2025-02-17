import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // iamgePath = computed(() => {
  //   return 'assets/Users/' + this.avatar();
  // });
  iamgePath() {
    return 'assets/Users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
