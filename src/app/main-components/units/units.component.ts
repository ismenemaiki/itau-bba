import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataTableConfig } from 'src/app/shared/configs/data-table.config';
import { IBusiness } from 'src/app/shared/models/business.model';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'it-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
})
export class UnitsComponent implements OnInit {
  data!: IBusiness;
  dataSource = new MatTableDataSource<any>([]);
  dataTable = DataTableConfig.units.columns;
  constructor(private APIService: APIService, private router: Router) {}

  ngOnInit(): void {
    this.APIService.getListCompanies().subscribe({
      next: (res) => {
        this.data = res;
        this.dataSource.data = this.data as any;
      },
    });
  }
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  redirectToDetail(item: IBusiness) {
    this.router.navigate(['polos/unidade', item.id]);
  }
}
