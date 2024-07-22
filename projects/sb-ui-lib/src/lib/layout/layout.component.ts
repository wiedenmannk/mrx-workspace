import { Component, Input } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
	selector: "lib-layout",
	standalone: false,
	templateUrl: "./layout.component.html",
	styles: ""
})
export class LayoutComponent {
  @Input() items?: MenuItem[];
}
