import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainaveComponent } from './mycomponents/mainave/mainave.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { SecondnavComponent } from './mycomponents/secondnav/secondnav.component';
import { PhpcoursComponent } from './mycomponents/phpcours/phpcours.component';
import { PortfolioComponent } from './mycomponents/portfolio/portfolio.component';
import { JscoursComponent } from './mycomponents/jscours/jscours.component';

@NgModule({
  declarations: [
    AppComponent,
    MainaveComponent,
    HomeComponent,
    SecondnavComponent,
    PhpcoursComponent,
    PortfolioComponent,
    JscoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
