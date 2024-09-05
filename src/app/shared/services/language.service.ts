import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public currentLang = new BehaviorSubject<string>('pt');
  private currentCurrency = new BehaviorSubject<string>('BRL');

  currentLang$ = this.currentLang.asObservable();
  currentCurrency$ = this.currentCurrency.asObservable();

  switchLanguage(newLang: string) {
    const newCurrency = newLang === 'pt' ? 'BRL' : 'USD';
    this.currentLang.next(newLang);
    this.currentCurrency.next(newCurrency);
  }
}
