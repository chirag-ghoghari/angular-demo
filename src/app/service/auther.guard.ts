import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autherGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loggedUser = localStorage.getItem('loginuser');
  if(loggedUser != null ){
    return true;
  }else{
    router.navigateByUrl('login');
    return false;
  }
  
};
