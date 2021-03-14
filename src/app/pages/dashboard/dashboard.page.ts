import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

export interface IPais{
  country?: string;
  code?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})

export class DashboardPage implements OnInit {

  min?: Date;
  max?: Date;

  editForm = this.fb.group( {
    fechaReserva: [ null, [ Validators.required ] ],
    correo: [ null, [ Validators.required ] ],
    nombre: [ null, [ Validators.required ] ],
    pais: [ null, [] ]
  });

  paises?: IPais[] = [];

  constructor( private fb: FormBuilder, private _ps: PaisesService ) { }

  ngOnInit(): void {
    this.validMail();
    this.setRango();
    this.getPaises();
  }

  enviar(): void{
    console.log( this.editForm.value );
  }

  validMail(): any {

    this.editForm.get('correo')?.valueChanges.subscribe( value => {
      if( value.includes('gmail') || value.includes('hotmail') ){
        this.editForm.get('correo')?.setErrors( {invalidEmail: true} );
      } else {
        this.editForm.get('correo')?.setErrors( null );
      }
    })
  }

  setRango(): void {
    const today = new Date();
    const actual_month = today.getMonth();
    const actual_year = today.getFullYear();
    this.min = new Date( `${ actual_year - 1 }-${ actual_month + 2 }-1` );
    today.setDate( today.getDate() + 1 );
    this.max = today;
  }

  getPaises(): void {
    this._ps.getPaises().subscribe( (paises: any[]) => {
      for( let pais in paises ){
        this.paises?.push({
          code: pais,
          country: paises[pais].country
        });
      }
    });
  }

}
