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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const modulesImportExport = [
  FormsModule,
  MatTableModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatMenuModule,
  MatButtonModule

]
@NgModule({
  declarations: [
    CepComponent, 
    TableComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    modulesImportExport
  ],
  exports: [
    CepComponent, 
    TableComponent,
    modulesImportExport],
})
export class SharedModule {}