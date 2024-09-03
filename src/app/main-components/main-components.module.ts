import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { MainComponentsComponent } from "./main-components.component";
import { MainComponentsRoutingModule } from "./main-components.routing";

@NgModule({
    declarations: [MainComponentsComponent, HeaderComponent],
    imports: [CommonModule, MainComponentsRoutingModule],
    providers: []
})
export class MainComponentsModule {}