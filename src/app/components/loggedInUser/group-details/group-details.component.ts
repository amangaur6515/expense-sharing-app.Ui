import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupManagementService } from 'src/app/services/group-management.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent {
    groupId:any=0;
    groupDetails:any={};
    constructor(private route: ActivatedRoute,private _groupmanagementService:GroupManagementService) { 
      //extract the group id from url
      this.route.params.subscribe(params => {
        this.groupId = params['groupId'];
      });
      //get the group details
      this.getGroupDetails();
    }

    //get the group detail
    getGroupDetails(){
      //get the group details
      this._groupmanagementService.getGroupDetails(this.groupId).subscribe((res:any)=>{
        console.log(res);
        this.groupDetails=res;
      })
    }
}
