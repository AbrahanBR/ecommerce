import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../shared/user.interface';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.scss']
})
export class CreatUserComponent implements OnInit {

  constructor(private userService:UserService) {}

  ngOnInit() {
  }

  create(user:UserInterface){
    this.userService.createUser(user).subscribe();
  }
}
