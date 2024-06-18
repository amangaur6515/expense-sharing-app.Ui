import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl="https://localhost:7035/api/Auth/";

  constructor(private http: HttpClient) { }

  login(user:any){
    return this.http.post(this.apiUrl+"login",user);
  }

  storeUsername(username:string){
    localStorage.setItem("username",username);
  }
  getUsername(){
    const username=localStorage.getItem("username");
    return username;
  }
  deleteUsername(){
    localStorage.removeItem("username");
  }

  isLoggedIn(){
    const username=localStorage.getItem("username");
    if(username){
      return true;
    }
    return false;
  }
}
