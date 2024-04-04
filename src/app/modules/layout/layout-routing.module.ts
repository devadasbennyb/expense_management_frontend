import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExpenseComponent } from "@page/expense/expense.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { LayoutComponent } from "./layout.component";
import { TripComponent } from "@page/trip/trip.component";
import { ReportsComponent } from "@page/reports/reports.component";
import { AdvancesComponent } from "@page/advances/advances.component";
import { SettingsComponent } from "@page/settings/settings.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "expense",
        component: ExpenseComponent,
      },
      {
        path: "trip",
        component: TripComponent,
      },
      {
        path: "reports",
        component: ReportsComponent,
      },
      {
        path: "advances",
        component: AdvancesComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "admin",
        loadChildren: () =>
          import("../admin/admin.module").then((m) => m.AdminModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
