import { Component, OnInit } from '@angular/core';
import { CepService } from '../../services/cep.service';

@Component({
  selector: 'it-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
    console.log('get cep',this.cepService.searchAdressByCep('04850180'));
  }
}
