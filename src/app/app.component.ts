import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import{UserComponent} from "./user/user.component";
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from './dummyUser';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent , UserComponent , TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first';
  users = DUMMY_USERS;
  onSelectUser(id: string){
console.log('user has an id :' + id);

  }

}
