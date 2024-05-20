/*import { CanActivateFn } from '@angular/router';
import { SellerService } from './Services/seller.service';


export const authenticationGuard: CanActivateFn = (route, state) => {

  return false;
};*/

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SellerService } from "./Services/seller.service";

@Injectable({providedIn:'root'

})
export class authenticationGuard implements CanActivate{
  constructor(private sellerService:SellerService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(localStorage.getItem('seller')){
        return true;
      }
      
      
      return this.sellerService.isSellerLogedIn;
    
  }
  
}
