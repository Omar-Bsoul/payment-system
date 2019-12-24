import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./components/pages/home-page/home-page.component";
import { AccountsPageComponent } from "./components/pages/accounts-page/accounts-page.component";
import { PaymentsPageComponent } from "./components/pages/payments-page/payments-page.component";
import { NewAccountPageComponent } from "./components/pages/new-account-page/new-account-page.component";
import { NewPaymentPageComponent } from "./components/pages/new-payment-page/new-payment-page.component";
import { AccountViewerPageComponent } from "./components/pages/account-viewer-page/account-viewer-page.component";
import { PaymentViewerPageComponent } from "./components/pages/payment-viewer-page/payment-viewer-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "accounts", component: AccountsPageComponent },
  { path: "payments", component: PaymentsPageComponent },
  { path: "accounts/add", component: NewAccountPageComponent },
  { path: "payments/add", component: NewPaymentPageComponent },
  { path: "accounts/:id", component: AccountViewerPageComponent },
  { path: "payments/:id", component: PaymentViewerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
