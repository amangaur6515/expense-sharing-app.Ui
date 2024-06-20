import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ExpenseManagementService {
  private apiUrl="https://localhost:7035/api/ExpenseManagement/"
  
  constructor(private http: HttpClient) { } // Inject the HttpClient module
  

  getGroupExpenses(groupId:number){
    return this.http.get(this.apiUrl+"GetGroupExpenses/"+groupId);
  }

  createExpense(formData:any){
    return this.http.post(this.apiUrl+"CreateExpense",formData);
  }

  getExpenseDetails(expenseId:number){
    return this.http.get(this.apiUrl+"GetExpenseDetails/"+expenseId);
  }
}
