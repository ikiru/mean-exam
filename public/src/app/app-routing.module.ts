// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AnswerComponent } from "./answer/answer.component";
import { AddComponent } from "./add/.add.component";

// Routes
const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "add", component: AddComponent },
  { path: "answer", component: AnswerComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "home", component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
