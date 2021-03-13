import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { HomeComponent } from './home/home.component';
import { ItemPageComponent } from './item-page/item-page.component';

const routes: Routes = [
  {
    path: "register",
    component: CreatUserComponent,
  },
  {
    path: "itemPage/:id",
    component: ItemPageComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
