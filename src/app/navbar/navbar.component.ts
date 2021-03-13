import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../shared/cart/cart.service';
import { ItemInterface } from '../shared/item.interface';
import { ItemService } from '../shared/item/item.service';
import { UserInterface } from '../shared/user.interface';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @ViewChild(MatMenuTrigger, {read:MatMenuTrigger}) matMenuTrigger : MatMenuTrigger;
  public userDetails: UserInterface;
  public itemDetails: Array<ItemInterface>;
  public userItemCartAmount:number; 
  public itensCart: Array<ItemInterface>;

  constructor(
    private itemService: ItemService,
    private userService: UserService, 
    private matSnackBar: MatSnackBar, 
    private router: Router, 
    private cartService: CartService) { }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserDetails();
    this.badgeButtonCartFunctionality();
  }

  login(userName:string, password:string){
    this.userService.login(userName,password).subscribe((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      this.userDetails = this.userService.getUserDetails();
      this.matMenuTrigger.closeMenu();
      this.router.navigate(["home"]);
    }, (error) => {
      this.matSnackBar.open(error.message, "close", {duration: 10000, horizontalPosition:"center",verticalPosition:"top"})
    });
  }

  logout(){
    this.userService.logout().subscribe(() =>{
      delete this.userDetails;
    });
  }

  badgeButtonCartFunctionality(){
    this.cartService.getItemCart().subscribe((itens) => {
      this.userItemCartAmount = itens.length;
      this.itemDetails = itens;
    })
  }



}
