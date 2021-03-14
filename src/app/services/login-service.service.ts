import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUsuario } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user?: IUsuario | null;

  private url = 'https://ies-webcontent.com.mx/xccm/user/validarUsuario';

  constructor( private http: HttpClient, private router: Router ) { }

  login( data: any ): Observable<any>{
    return this.http.post( this.url , data ).pipe( map ( ( resp: any ) => {
      return this.saveUser( resp.resultado );
    }));
  }

  logOut(): void {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate( ['login'] );
  }

  saveUser( user: IUsuario ): boolean{
    if( user && user.id_rol === 5 ) {
      this.user = user;
      localStorage.setItem( 'user', JSON.stringify( user ) );
      return true;
    }
    localStorage.removeItem('user');
    return false;
  }

  isDist(): boolean {
    return this.user?.id_rol === 5 ? true : false;
  }

  activo(): boolean {
    const user = localStorage.getItem('user');
    if( user ){
      return true;
    }
    return false;
  }
}
