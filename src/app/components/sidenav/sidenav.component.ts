import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isdash: boolean = false;

  constructor( private router: Router, private _ls: LoginService,  ) { }

  ngOnInit(): void {
    if( this.router.url.includes( 'dashboard' ) ) {
      this.isdash = true;
    }
  }

  dashboard(): void {
    this.router.navigate(['app/dashboard']);
  }

  componenteUno(): void {
    this.router.navigate(['app/componenteUno']);
  }

  logOut(): void {
    this._ls.logOut();
    // this.router.navigate(['login']);
  }
}
