import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expenseSharingApp.Ui';
  constructor(private _authService:AuthServiceService,private route:Router,private toastr:ToastrService){
    
  }
  get username(): string | null {
    return localStorage.getItem("username");
  }

  isAdmin(){
    //first there should be login
    const isLoggedIn=this._authService.isLoggedIn();
    if(isLoggedIn){
      //when there is a login match the username
      const username=this._authService.getUsername();
      if(username=="admin@nagarro.com"){
        return true;
      }
      
    }
    return false;
  }

  isRegularUser(){
    //first there should be login
    const isLoggedIn=this._authService.isLoggedIn();
    if(isLoggedIn){
      //when there is a login match the username
      const username=this._authService.getUsername();
      if(username!="admin@nagarro.com"){
        return true;
      }
      
    }
    return false;

  }

  isLogin(){
    return this._authService.isLoggedIn();
  }

  logout(){
    this._authService.deleteUsername();
    this.route.navigate([''])
    this.toastr.success("Logout Success","Expense Sharing App")
  }

}
