import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mycomponents/home/home.component';
import { PhpcoursComponent } from './mycomponents/phpcours/phpcours.component';
import { PortfolioComponent } from './mycomponents/portfolio/portfolio.component';
import { JscoursComponent } from './mycomponents/jscours/jscours.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'php', component: PhpcoursComponent },
  { path: 'js', component: JscoursComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
