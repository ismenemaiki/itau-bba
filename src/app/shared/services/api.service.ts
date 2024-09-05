import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl = 'https://antlia-mockapi.azurewebsites.net/api/v1/';

  constructor(private httpClient: HttpClient) {}

  public getListCompanies(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}itau_teste`).pipe(map((res) => res));
  }
  public getDetailCompany(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}itau_teste/${id}`).pipe(map((res) => res));
  }
}
