import { LiveBetsPageModule } from './../live-bets/live-bets.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFootballPage } from './tab-football.page';

const routes: Routes = [
  {
    path: '',
    component: TabFootballPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'live-matches',
        loadChildren: () => import('./../live-matches/live-matches.module').then(m => m.LiveMatchesPageModule)
      },
      {
        path: '',
        redirectTo: 'live-matches',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFootballPageRoutingModule { }
