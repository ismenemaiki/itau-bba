import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IBussiness } from 'src/app/shared/models/bussiness.model';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'it-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
})
export class UnitsComponent implements OnInit {
  data!: IBussiness;
  dataSource = new MatTableDataSource<any>([]);

  constructor(
    private APIService: APIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.APIService.getListCompanies().subscribe({
      next: (res) => {
        this.data = res;
        this.dataSource.data = this.data as any;
      }
    });
  }
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  redirectToDetail(item: IBussiness) {
    console.log('ITEM ', item);
    this.router.navigate(['polos/unidade', item.id]);
  }
}
