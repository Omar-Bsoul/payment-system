import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AccountsPageComponent } from "./components/pages/accounts-page/accounts-page.component";
import { PaymentsPageComponent } from "./components/pages/payments-page/payments-page.component";
import { HomePageComponent } from "./components/pages/home-page/home-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AccountsPageComponent,
    PaymentsPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
