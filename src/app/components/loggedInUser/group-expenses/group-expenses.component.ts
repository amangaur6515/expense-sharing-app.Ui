
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ExpenseManagementService } from 'src/app/services/expense-management.service';
import { GroupManagementService } from 'src/app/services/group-management.service';

@Component({
  selector: 'app-group-expenses',
  templateUrl: './group-expenses.component.html',
  styleUrls: ['./group-expenses.component.css']
})
export class GroupExpensesComponent {
  groupId:any=0;
  groupName:any="";
  groupExpenses:any=[];
  username:any="";
  //extract the group id and that is coming from the url using angular router
  //extract group name and group id from the url
  constructor(private route: ActivatedRoute,private _expenseManagementService:ExpenseManagementService,private _authService:AuthServiceService,private router:Router) {
    this.route.params.subscribe(params => {
      this.groupId = params['id'];
      this.groupName=params['groupName'];
    });
    //get current user
    this.username=_authService.getUsername();
    //get group expenses
    this.getGroupExpenses();
  }
  //get the group expenses
 
  getGroupExpenses(){
    this._expenseManagementService.getGroupExpenses(this.groupId).subscribe((res:any)=>{
      console.log(res);
      this.groupExpenses=res;
    })
  }

  goToCreateExpense(){
    //redirect to create expense component
    //pass the group id and group name
    this.router.navigate(['/create-expense', this.groupId]);
  }
  goToExpenseDetails(expenseId:number,expenseDescription:string){
    //redirect to expense details component
    //pass the expense id 
    this.router.navigate(['/expense-details', expenseId,expenseDescription]);

  }
}
