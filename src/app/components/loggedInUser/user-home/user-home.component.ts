import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module
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
  constructor(private _groupManagementService:GroupManagementService,private _authService:AuthServiceService, private router: Router) { // Inject the Router module
    this.username=_authService.getUsername();
    this.getUserBelongedGroups();
  }

  getUserBelongedGroups(){
    this._groupManagementService.getUserBelongedGroups(this.username).subscribe((res:any)=>{
      this.userBelongedGroups=res;
      console.log(res);
    })
  }

  //method that will take group id and will redirect to group expenses component
  goToGroupExpenses(groupId:number,groupName:string){
    //redirect to group expenses component
    //pass the group name also
    
    //this.router.navigate(['/group-expenses', groupId]);
    //pass the group name also in url
    this.router.navigate(['/group-expenses', groupId,groupName]);
  }

  goToGroupDetails(groupId:number){
    //redirect to group details component
    //pass the group id 
    this.router.navigate(['/group-details', groupId]);

  }

 
  



}

