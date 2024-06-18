import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { GroupManagementService } from 'src/app/services/group-management.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  username:any="";
  userBelongedGroups:any=[];
  constructor(private _groupManagementService:GroupManagementService,private _authService:AuthServiceService) { 
    this.username=_authService.getUsername();
    this.getUserBelongedGroups();
  }

  getUserBelongedGroups(){
    this._groupManagementService.getUserBelongedGroups(this.username).subscribe((res:any)=>{
      this.userBelongedGroups=res;
    })
  }

  //random integer generator
  getRandomInt(max:number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  



}

