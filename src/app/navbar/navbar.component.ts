import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserInterface } from '../shared/user.interface';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @ViewChild(MatMenuTrigger, {read:MatMenuTrigger}) matMenuTrigger : MatMenuTrigger;
  public userDetails : UserInterface;

  constructor(private userService: UserService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserDetails();
  }

  login(userName:string, password:string){
    this.userService.login(userName,password).subscribe((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      this.userDetails = this.userService.getUserDetails();
      this.matMenuTrigger.closeMenu();
    }, (error) => {
      this.matSnackBar.open(error.message, "close", {duration: 10000, horizontalPosition:"center",verticalPosition:"top"})
    });
  }

  logout(){
    this.userService.logout().subscribe(() =>{
      delete this.userDetails;
    });
  }



}
