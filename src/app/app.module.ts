import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModules } from "./material.module";

import { AccountsPageComponent } from "./components/pages/accounts-page/accounts-page.component";
import { PaymentsPageComponent } from "./components/pages/payments-page/payments-page.component";
import { HomePageComponent } from "./components/pages/home-page/home-page.component";
import { PageItemComponent } from "./components/page-item/page-item.component";
import { DataViewerFieldComponent } from "./components/data-viewer-field/data-viewer-field.component";
import { AccountItemComponent } from "./components/account-item/account-item.component";
import { PaymentItemComponent } from "./components/payment-item/payment-item.component";
import { NewAccountPageComponent } from "./components/pages/new-account-page/new-account-page.component";
import { NewPaymentPageComponent } from "./components/pages/new-payment-page/new-payment-page.component";
import { AccountViewerPageComponent } from "./components/pages/account-viewer-page/account-viewer-page.component";
import { PaymentViewerPageComponent } from "./components/pages/payment-viewer-page/payment-viewer-page.component";
import { DataViewerCardComponent } from "./components/data-viewer-card/data-viewer-card.component";
import { AccountHeaderComponent } from "./components/account-header/account-header.component";
import { PaymentHeaderComponent } from "./components/payment-header/payment-header.component";
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsPageComponent,
    PaymentsPageComponent,
    HomePageComponent,
    PageItemComponent,
    DataViewerFieldComponent,
    AccountItemComponent,
    PaymentItemComponent,
    NewAccountPageComponent,
    NewPaymentPageComponent,
    AccountViewerPageComponent,
    PaymentViewerPageComponent,
    DataViewerCardComponent,
    AccountHeaderComponent,
    PaymentHeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
