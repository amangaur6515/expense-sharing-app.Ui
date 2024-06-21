import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  const username=localStorage.getItem("username");
  if(username){
    return true;
  }else{
    //navigate to login
    router.navigate(['/login'])
    return false;

  }
 
};
