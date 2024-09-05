import { RouterModule, Routes } from '@angular/router';
import { MainComponentsComponent } from './main-components.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponentsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
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
