import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CoComponent } from "./_components/co/co.component";
import { CodashboardComponent } from "./_components/codashboard/codashboard.component";
import { ConotificationsComponent } from "./_components/conotifications/conotifications.component";

const routes: Routes = [
  { path: "", redirectTo: "rs-india", pathMatch: "full" },
  // { path: 'login', component: LoginComponent },
  { path: "rs-india", component: CodashboardComponent },
  {
    path: "co",
    component: CoComponent,
    children: [
      { path: "", redirectTo: "conotif", pathMatch: "full" },
      { path: "conotif", component: ConotificationsComponent },
      { path: "dashboard", component: CodashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
