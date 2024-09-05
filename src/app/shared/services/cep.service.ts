import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import cepPromise from 'cep-promise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public searchAddressByCep(cep: string): Observable<any> {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    return this.http.get(url);
  }
}
