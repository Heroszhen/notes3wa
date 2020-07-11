import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mycomponents/home/home.component';
import { PhpcoursComponent } from './mycomponents/phpcours/phpcours.component';
import { PortfolioComponent } from './mycomponents/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'php', component: PhpcoursComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
