import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {path: 'user',component:UserComponent},
  {path: 'personal',component:PersonalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
