import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User = new User;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submitted", this.user);
  }

}
