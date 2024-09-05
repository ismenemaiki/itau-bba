import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { MainComponentsComponent } from "./main-components.component";
import { MainComponentsRoutingModule } from "./main-components.routing";
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [MainComponentsComponent, HeaderComponent, HomeComponent],
    imports: [CommonModule, MainComponentsRoutingModule, SharedModule],
    providers: []
})
export class MainComponentsModule {}