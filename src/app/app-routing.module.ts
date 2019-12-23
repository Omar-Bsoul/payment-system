import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./components/pages/home-page/home-page.component";
import { AccountsPageComponent } from "./components/pages/accounts-page/accounts-page.component";
import { PaymentsPageComponent } from "./components/pages/payments-page/payments-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "accounts",
    component: AccountsPageComponent
  },
  {
    path: "payments",
    component: PaymentsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
