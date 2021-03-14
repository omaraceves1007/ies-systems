import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  constructor( private _ls: LoginService, private router: Router ) { }

  ngOnInit(): void {
    if( this._ls.activo() ){
      this.router.navigate(['app/dashboard']);
    }
  }

}
