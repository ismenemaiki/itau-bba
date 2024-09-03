import { NgModule } from "@angular/core";
import { CepComponent } from "./components/cep/cep.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        CepComponent
    ],
    imports: [CommonModule],
    exports: [CepComponent]
})
export class SharedModule {}