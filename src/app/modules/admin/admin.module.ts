import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { TabMenuModule } from "primeng/tabmenu";
import { CardModule } from "primeng/card";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from 'primeng/avatargroup';
import { GroupsComponent } from "./groups/groups.component";
import { IntegrationsComponent } from "@app/integrations/integrations.component";
import { PaymentsComponent } from "./payments/payments.component";
import { RolesComponent } from "./roles/roles.component";
import { RulesComponent } from "@app/rules/rules.component";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';
import { AddRoleComponent } from "@component/add-role/add-role.component";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersComponent } from "./users/users.component";
import { LayoutModule } from "@module/layout/layout.module";

@NgModule({
    declarations: [
        AdminComponent,
        GroupsComponent,
        RolesComponent,
        PaymentsComponent,
        RulesComponent,
        IntegrationsComponent,
        AddRoleComponent,
        UsersComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TabMenuModule,
        CardModule,
        AvatarModule,
        AvatarGroupModule,
        DialogModule,
        ButtonModule,
        TableModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        LayoutModule
    ]
})
export class AdminModule { }
