import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./components/homepage/homepage.component";

import { MainService } from "./services/main.service";
import { SessionComponent } from './components/session/session.component';

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  {path:'session/:id', component: SessionComponent}
];

@NgModule({
  declarations: [AppComponent, HomepageComponent, SessionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {}
