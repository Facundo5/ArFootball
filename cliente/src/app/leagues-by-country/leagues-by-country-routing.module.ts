import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaguesByCountryPage } from './leagues-by-country.page';

const routes: Routes = [
  {
    path: '',
    component: LeaguesByCountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaguesByCountryPageRoutingModule {}
