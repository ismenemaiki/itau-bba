import { Component } from '@angular/core';

@Component({
  selector: 'it-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  redirect() {
    console.log('Menu não implementado');
  }
}
