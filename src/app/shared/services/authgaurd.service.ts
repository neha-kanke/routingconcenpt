import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  constructor(private _authservices:AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this._authservices.isuthenticated()
   .then(res=>{
   if(res===true){
    return true
   }else{
    return false
   }
   })
  }
}
