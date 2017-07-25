// modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

// component
import { AppComponent } from "./app.component";
import { AddComponent } from "./add/add.component";
import { AnswerComponent } from "./answer/answer.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { QaComponent } from './qa/qa.component';

// Services

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AnswerComponent,
    HomeComponent,
    DashboardComponent,
    QaComponent
  ],
  imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [
    AppComponent,
    AddComponent,
    AnswerComponent,
    HomeComponent,
    DashboardComponent
  ]
})
export class AppModule {}
