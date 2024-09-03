import { NgModule } from "@angular/core";
import { UnitsComponent } from "./units.component";
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { UnitsRoutingModule } from "./units.routing";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [UnitsComponent, UnitDetailComponent],
    imports: [UnitsRoutingModule, SharedModule]
})
export class UnitsModule {}