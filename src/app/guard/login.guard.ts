import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { LoginService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( private _ls: LoginService, private router: Router ){}

  canActivate(): boolean{
    if( this._ls.isDist() || this._ls.activo() ){
      return true;
    } else {
      this.router.navigate( [''] );
      return false;
    }
  }

}
