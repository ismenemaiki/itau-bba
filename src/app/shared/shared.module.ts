import { NgModule } from '@angular/core';
import { CepComponent } from './components/cep/cep.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CepComponent, TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [CepComponent, TableComponent],
})
export class SharedModule {}