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
}
