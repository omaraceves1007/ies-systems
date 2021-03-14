import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string = 'https://api.first.org/data/v1/countries?region=africa&limit=10&pretty=true';

  constructor( private http: HttpClient ) { }

  getPaises(): Observable<any> {
    return this.http.get( this.url ).pipe( map ( ( resp: any ) => {
      return resp.data;
    }));
  }
}
