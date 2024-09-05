import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  currentLang: string = 'pt';
  dataUser = {
    name: 'Maiki Rodrigues',
    position: 'Software Engineer',
    company: 'Itaú BBA',
  };

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    translate.setDefaultLang('pt');
    translate.use('pt');
  }
  switchLanguage(): void {
    const newLang =
      this.languageService.currentLang.getValue() === 'pt' ? 'en' : 'pt';
    this.translate.use(newLang);
    this.currentLang = newLang;
    this.languageService.switchLanguage(newLang);
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.translate.use(this.currentLang);
  }
}
