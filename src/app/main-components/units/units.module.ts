import { NgModule } from "@angular/core";
import { UnitsComponent } from "./units.component";
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { UnitsRoutingModule } from "./units.routing";

@NgModule({
    declarations: [UnitsComponent, UnitDetailComponent],
    imports: [UnitsRoutingModule]
})
export class UnitsModule {}