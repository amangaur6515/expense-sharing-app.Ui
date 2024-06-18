import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/anonymousUser/login/login.component';
import { Error404Component } from './components/anonymousUser/error404/error404.component';
import { UserHomeComponent } from './components/loggedInUser/user-home/user-home.component';






const routes: Routes = [
  //anonymous user
  {path:"",component:LoginComponent},
  {path:'login',component:LoginComponent},


  //loggedin user
  {path:'user-home',component:UserHomeComponent},



  //404
  {path:'**',component:Error404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
