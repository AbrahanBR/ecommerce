import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './shared/user/user.service';
import { ItemService } from './shared/item/item.service';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { CartService } from './shared/cart/cart.service';
import { PurchaseDialogComponent } from './purchase-dialog/purchase-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatUserComponent,
    HomeComponent,
    ItemCardComponent,
    ItemPageComponent,
    PurchaseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    MatSnackBarModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatBadgeModule
  ],
  providers: [
    UserService,
    ItemService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
