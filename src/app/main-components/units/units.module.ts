import { NgModule } from '@angular/core';
import { UnitsComponent } from './units.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { UnitsRoutingModule } from './units.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [UnitsComponent, UnitDetailComponent ],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    SharedModule, 
    NgxMaskModule.forRoot()
  ],
  
})
export class UnitsModule {}
