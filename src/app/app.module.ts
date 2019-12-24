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
  MatIconModule,
  MatRippleModule,
  MatGridListModule,
  MatListModule,
  MatInputModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AccountsPageComponent } from "./components/pages/accounts-page/accounts-page.component";
import { PaymentsPageComponent } from "./components/pages/payments-page/payments-page.component";
import { HomePageComponent } from "./components/pages/home-page/home-page.component";
import { PageItemComponent } from "./components/page-item/page-item.component";
import { AccountItemComponent } from "./components/account-item/account-item.component";
import { PaymentItemComponent } from "./components/payment-item/payment-item.component";
import { NewAccountPageComponent } from "./components/pages/new-account-page/new-account-page.component";
import { NewPaymentPageComponent } from "./components/pages/new-payment-page/new-payment-page.component";
import { AccountViewerPageComponent } from "./components/pages/account-viewer-page/account-viewer-page.component";
import { PaymentViewerPageComponent } from "./components/pages/payment-viewer-page/payment-viewer-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AccountsPageComponent,
    PaymentsPageComponent,
    HomePageComponent,
    PageItemComponent,
    AccountItemComponent,
    PaymentItemComponent,
    NewAccountPageComponent,
    NewPaymentPageComponent,
    AccountViewerPageComponent,
    PaymentViewerPageComponent
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
    FlexLayoutModule,
    MatRippleModule,
    MatGridListModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
