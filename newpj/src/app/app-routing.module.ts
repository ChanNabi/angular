import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../app/user/user.component';
import { Routes, RouterModule } from '@angular/router';

const Routes: Routes = [
  {path: 'user',component:UserComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(Routes),CommonModule ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
