import { LiveBetsPageModule } from './live-bets/live-bets.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tab-football',
    loadChildren: () => import('./tab-football/tab-football.module').then( m => m.TabFootballPageModule)
  },
  {
    path: '',
    redirectTo: 'tab-football',
    pathMatch: 'full'
  },
  {
    path: 'leagues-by-country/:code',
    loadChildren: () => import('./leagues-by-country/leagues-by-country.module').then( m => m.LeaguesByCountryPageModule)
  },
  {
    path: 'live-bets/:code',
    loadChildren: () => import('./live-bets/live-bets.module').then( m => m.LiveBetsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
