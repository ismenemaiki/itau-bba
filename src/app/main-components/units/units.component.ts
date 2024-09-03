import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'it-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  viewUnits(id: number): void {
    this.router.navigate(['polos/unidade', id])
  }
}
