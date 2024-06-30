import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ExpenseManagementService } from 'src/app/services/expense-management.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent {
  expenseId:any=0;
  expenseDescription:any="";
  expenseDetails:any={};
  username:any="";
  constructor(private route: ActivatedRoute,private _expenseManagementService:ExpenseManagementService,private _authService:AuthServiceService,private router:Router) {
    //extract the expense id from the url
    this.route.params.subscribe(params => {
      this.expenseId = params['expenseId'];
      this.expenseDescription=params['expenseDescription'];
    });
    //get the expense details
    this.getExpenseDetails();
    //get the current user
    this.username=_authService.getUsername();
   }

  
  getExpenseDetails(){
    this._expenseManagementService.getExpenseDetails(this.expenseId).subscribe((res:any)=>{
      console.log(res);
      this.expenseDetails=res;
    })
  }

  //check if a useremail exist in the splitamong list
  checkIfUserExist(email:string){
    console.log(this.expenseDetails.includes(email));
    //foreach  array of object in expenseDetails, check if the email exists the object
    for(let obj of this.expenseDetails){
      if(obj.userEmail==email){
        return true;
      }
    }
    return false;
  }

  
}
