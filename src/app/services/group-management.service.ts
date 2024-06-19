import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupManagementService {

  private apiUrl="https://localhost:7035/api/GroupManagement/"


  constructor(private http: HttpClient) { }

  getUserBelongedGroups( userEmail:string){
    return this.http.get(this.apiUrl+"GetUserBelongedGroups/"+userEmail);
  }

  createGroup(formData:any){
    return this.http.post(this.apiUrl+"CreateGroup",formData);
  }

  


}
