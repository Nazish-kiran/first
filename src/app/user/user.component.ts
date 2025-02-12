import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummyUser';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
selecteduser = DUMMY_USERS[randomIndex];
}
