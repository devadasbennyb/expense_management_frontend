import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "./components/signin/signin.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  { path: "signin", component: SigninComponent },
  // { path: "signup", component: SignupComponent },
  // { path: "resetpassword", component: ResetPasswordComponent },
  {
    path: "",
    loadChildren: () =>
      import("./modules/layout/layout.module").then((m) => m.LayoutModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
