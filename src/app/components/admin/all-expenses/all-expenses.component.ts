import { Component } from '@angular/core';
import { ExpenseManagementService } from 'src/app/services/expense-management.service';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.css']
})
export class AllExpensesComponent {
    allExpenses:any=[];
    constructor(private _expenseManagementService:ExpenseManagementService) {
      this.getAllExpenses();
     }

    //get all expenses
    getAllExpenses(){
      this._expenseManagementService.getAllExpenses().subscribe((res:any)=>{
        console.log(res);
        this.allExpenses=res;
      })
    }

}
