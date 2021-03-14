import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class VerificaUserGuard implements CanActivate {

  constructor( private router: Router, private _ls: LoginService ){}

  canActivate(): boolean {
    if ( this._ls.activo() ){
      return true;
    }
    this.router.navigate( [''] );
    return false;
  }

}
