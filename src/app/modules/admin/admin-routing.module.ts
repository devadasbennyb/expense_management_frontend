import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { GroupsComponent } from "./groups/groups.component";
import { IntegrationsComponent } from "../../integrations/integrations.component";
import { PaymentsComponent } from "./payments/payments.component";
import { RolesComponent } from "./roles/roles.component";
import { RulesComponent } from "../../rules/rules.component";
import { UsersComponent } from "./users/users.component";
import { CreditcardComponent } from "../../components/creditcard/creditcard.component";
import { BanktransferComponent } from "@component/banktransfer/banktransfer.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "groups",
        component: GroupsComponent,
      },
      {
        path: "roles",
        component: RolesComponent,
      },
      {
        path:"payments",
        component: PaymentsComponent,
        children:[
          {path:'creditcard',component:CreditcardComponent},
          {path: 'banktransfer', component:BanktransferComponent}
        ],
      },
      {
        path: "rules",
        component: RulesComponent,
      },
      {
        path: "integrations",
        component:IntegrationsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ],
})
export class AdminRoutingModule {}
export const routingComponents = [AdminComponent,PaymentsComponent,CreditcardComponent, BanktransferComponent]
