import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { PrimengModule } from "../primeng/primeng.module";

const exports = [LayoutComponent];

@NgModule({
	declarations: [...exports],
	imports: [
		CommonModule, PrimengModule
	],
	exports: [...exports]
})
export class LayoutModule { }
