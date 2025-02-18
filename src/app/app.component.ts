import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from './dummyUser';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first';
  users = DUMMY_USERS;
  selectedUserId!: string;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log(this.selectedUser); // Log the selected user to the console
  }
}
