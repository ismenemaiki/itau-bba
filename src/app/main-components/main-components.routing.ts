import { RouterModule, Routes } from '@angular/router';
import { MainComponentsComponent } from './main-components.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainComponentsComponent,
    children: [
      { path: '', redirectTo: 'polos', pathMatch: 'full' },
      {
        path: 'polos',
        data: { title: 'polos itaú' },
        loadChildren: () =>
          import('./units/units.module').then(
            (m) => m.UnitsModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainComponentsRoutingModule {}
