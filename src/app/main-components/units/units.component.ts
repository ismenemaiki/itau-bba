import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'it-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
})
export class UnitsComponent implements OnInit {
  constructor(
    private APIService: APIService,
    private router: Router) {}

  ngOnInit(): void {
    this.APIService.getListCompanies().subscribe(res => {

      console.log('componente polo', res);
    });
  }
  viewUnits(id: number): void {
    this.router.navigate(['polos/unidade', id]);
  }
}
