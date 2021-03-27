import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { HomeComponent } from './home/home.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  {
    path: "register",
    component: CreatUserComponent
  },
  {
    path: "itemPage/:id",
    component: ItemPageComponent
  },
  {
    path: "acount_settings",
    component: UserSettingsComponent
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
