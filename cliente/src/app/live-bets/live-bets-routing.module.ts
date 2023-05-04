import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveBetsPage } from './live-bets.page';

const routes: Routes = [
  {
    path: '',
    component: LiveBetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveBetsPageRoutingModule {}
