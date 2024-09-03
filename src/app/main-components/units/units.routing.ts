import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UnitsComponent } from './units.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UnitsComponent,
    children: [
      {
        path: 'unidade/:id',
        data: { title: 'detalhe do polo' },
        component: UnitDetailComponent
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule {}
