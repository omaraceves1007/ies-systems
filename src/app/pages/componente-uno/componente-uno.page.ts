import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.page.html',
  styleUrls: ['./componente-uno.page.scss']
})
export class ComponenteUnoPage implements OnInit {

  datos = [
    { value: 1 , name: 'CampoUno'},
    { value: 2 , name: 'CampoDos'},
    { value: 3 , name: 'CampoTres'},
    { value: 4 , name: 'CampoCuatro'},
    { value: 5 , name: 'CampoCinco'},
    { value: 6 , name: 'CampoSeis'},
   ];
  // [
  //   { value: 21 , name: 'a'},
  //   { value: 20 , name: 'b'},
  //   { value: 19 , name: 'c'},
  //   { value: 18 , name: 'd'},
  //   { value: 17 , name: 'e'},
  //   { value: 16 , name: 'f'}
  // ];

  result = {};

  obj =  { CampoUno: 1, CampoDos: 2, CampoTres: 3, CampoCuatro: 4, CampoCinco: 5, CampoSeis: 6 };

  arrayResult = [];

  constructor() { }

  ngOnInit(): void {
    this.result = this.getResult();
    this.arrayResult = this.getArrayFromObj();
  }

  getResult(): any {
    let resultado = {};
    this.datos.forEach( ( {value, name} ) => {
      let obj = { [name]: value};
      Object.assign( resultado, obj);
    });
    return resultado;
  }

  getArrayFromObj(): any{
    let arreglo = new Array();
    const keys = Object.keys( this.obj );
    const values = Object.values( this.obj );
    keys.forEach( ( key, i ) => {
      arreglo.push({
        value: values[i],
        name: key
      });
    });
    return arreglo;
  }

}
