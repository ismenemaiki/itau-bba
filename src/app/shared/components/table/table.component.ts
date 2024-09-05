import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableConfig } from '../../configs/data-table.config';
import { IBusiness } from '../../models/business.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'it-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataSourceInput!: IBusiness;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() label!: string;
  @Input() hasPagination!: boolean;
  @Output() actionItemTable: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<IBusiness>(this.dataSourceInput as any);
  columnsConfig = DataTableConfig.units.columns;
  displayedColumns: string[] = this.columnsConfig.map((column) => column.value);

  currentCurrency: string = 'BRL';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.languageService.currentCurrency$.subscribe((currency) => {
      this.currentCurrency = currency;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSourceInput'] && this.dataSourceInput) {
      this.dataSource.data = this.dataSourceInput as any;
      this.dataSource.sort = this.sort;
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  clickItem(item: IBusiness): void {
    this.actionItemTable.emit(item);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
