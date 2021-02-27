import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatUserComponent } from './creat-user/creat-user.component';

const routes: Routes = [
  {
    path: "register",
    component: CreatUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
