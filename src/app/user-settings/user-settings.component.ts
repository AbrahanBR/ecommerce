import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../shared/user.interface';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  public userDetails: UserInterface;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserDetails();
  } 

}
