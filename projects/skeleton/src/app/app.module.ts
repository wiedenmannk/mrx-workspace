import { LayoutModule } from "sb-ui-lib";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DefaultLayoutComponent } from "./layout/default-layout/default-layout.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
	declarations: [
		AppComponent,
		DefaultLayoutComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		LayoutModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
