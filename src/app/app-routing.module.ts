import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { c1Route } from './components/c1/c1.route';
import { c2Route } from './components/c2/c2.route';
import { c3Route } from './components/c3/c3.route';
import { NotFoundComponent } from './not-found/not-found.component';

const indexRoute: Route = {
  path: '',
  component: C1Component,
};

export const routes: Routes = [
  indexRoute,
  c1Route,
  c2Route,
  c3Route,
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
