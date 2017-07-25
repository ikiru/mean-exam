// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { LoginComponent } from "./login/login.component";

// Routes
const routes: Routes = [
  // { path: "", pathMatch: "full", component: LoginComponent },
  // { path: "dashboard", component: DashboardComponent },
  // { path: "my_listings", component: ListingsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
