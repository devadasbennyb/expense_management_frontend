import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { TopNavComponent } from "src/app/components/top-nav/top-nav.component";
import { SideNavComponent } from "src/app/components/side-nav/side-nav.component";
import { KpiV1Component } from "@component/kpi-v1/kpi-v1.component";
import { HomeComponent } from "@page/home/home.component";
import { GroupedVerticalBarAndLineComboChartComponent } from "@component/grouped-vertical-bar-and-line-combo-chart/grouped-vertical-bar-and-line-combo-chart.component";
import { ChartModule } from "primeng/chart";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { UserInfoComponent } from "@component/user-info/user-info.component";
import { TieredMenuModule } from "primeng/tieredmenu";
import { DividerModule } from "primeng/divider";
import { ExpenseComponent } from "@page/expense/expense.component";
import { AddExpenseComponent } from "@component/add-expense/add-expense.component";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { TripComponent } from "@page/trip/trip.component";
import { ReportsComponent } from "@page/reports/reports.component";
import { AdvancesComponent } from "@page/advances/advances.component";
import { SettingsComponent } from "@page/settings/settings.component";
import { AddTripComponent } from "@component/add-trip/add-trip.component";
import { AddAdvanceComponent } from "@component/add-advance/add-advance.component";
import { AddReportComponent } from "@component/add-report/add-report.component";
import { AddUserComponent } from "@component/add-user/add-user.component";
import { SettingsTopNavComponent } from "@component/settings-top-nav/settings-top-nav.component";
import { PaginatorModule } from 'primeng/paginator';
import { AddEmployeeComponent } from "@component/add-employee/add-employee.component";
import { SplitButtonModule } from 'primeng/splitbutton';
import { AddGroupComponent } from "@component/add-group/add-group.component";
import { CreditcardComponent } from "@component/creditcard/creditcard.component";
import { BanktransferComponent } from "@component/banktransfer/banktransfer.component";

@NgModule({
  declarations: [
    LayoutComponent,
    TopNavComponent,
    SideNavComponent,
    HomeComponent,
    KpiV1Component,
    GroupedVerticalBarAndLineComboChartComponent,
    UserInfoComponent,
    ExpenseComponent,
    AddExpenseComponent,
    AddGroupComponent,
    TripComponent,
    ReportsComponent,
    AdvancesComponent,
    SettingsComponent,
    AddTripComponent,
    AddReportComponent,
    AddAdvanceComponent,
    SettingsTopNavComponent,
    AddUserComponent,
    AddEmployeeComponent,
    AddGroupComponent,
    CreditcardComponent,
    BanktransferComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    DropdownModule,
    ChartModule,
    OverlayPanelModule,
    TieredMenuModule,
    DividerModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    PaginatorModule,
    SplitButtonModule,
  ],
  exports: [
    AddUserComponent, 
    AddGroupComponent,
    BanktransferComponent
   
  ]

})
export class LayoutModule { }
