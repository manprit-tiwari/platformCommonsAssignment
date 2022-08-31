import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";


const materials = [
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
]

@NgModule({
    exports: [materials]
})
export class MaterialModule {}