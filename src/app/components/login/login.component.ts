import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { IUsuario } from '../../models/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { SnackbarService } from 'ngx-snackbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  editForm = this.fb.group({
    usuario: [ null, [ Validators.required, Validators.maxLength(6) ] ],
    contrasena: [ null, [ Validators.required, Validators.maxLength(6) ] ]
  })

  constructor( private _ls: LoginService,
              public fb: FormBuilder,
              private _sbs: SnackbarService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  login():any {
    const value = this.getFromForm();
    this._ls.login( value ).subscribe( ( resp: IUsuario ) => {
      if( resp ) {
        this.router.navigate(['app/dashboard']);
      } else {
        this._sbs.add({
          msg: '¡Error! verifique sus credenciales',
          timeout: 5000,
          action: {
            text: 'Ok',
            color: '#EC1111'
          }
        });
      }
    } );
  }

  getFromForm(): any {
    return this.editForm.value;
  }
}
