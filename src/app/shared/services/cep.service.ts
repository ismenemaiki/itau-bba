import { Injectable } from '@angular/core';
import cepPromise from 'cep-promise';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor() { }

  public searchAdressByCep(cep: string): Promise<any> {
    return cepPromise(cep)
      .then(result => result)
      .catch(error => {
        console.error('Erro ao buscar o CEP:', error);
        throw error;
      });
  }
}
