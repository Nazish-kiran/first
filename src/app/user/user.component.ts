import { Component, Input, Output, EventEmitter } from '@angular/core';
import {type User } from './user.model';

// interface User  {
//   id: string;
//   name: string;
//   avatar: string;
// };
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // iamgePath = computed(() => {
  //   return 'assets/Users/' + this.avatar();
  // });
  iamgePath() {
    return 'assets/Users/' + this.user.avatar;
  }

  onSelectUser1() {
    this.select.emit(this.user.id);
  }
}
