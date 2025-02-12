import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // get iamgePath() {
  //   return 'assets/Users/' + this.selecteduser.avatar;
  // }
@Input () avatar!: string;
@Input () name!: string;

  onSelectUser() {

  }
}
