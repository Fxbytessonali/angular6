import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';





const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'userlogin', component: UserloginComponent },
{ path: 'todo', component: TodoComponent },

{ path: '', component: HomeComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
