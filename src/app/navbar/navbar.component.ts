import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(userName: string, password:string){
    this.userService.login(userName,password).subscribe((user) => {
      localStorage.setItem("user", JSON.stringify(user));
    });
  }

}
