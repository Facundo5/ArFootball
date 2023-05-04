import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaguesByCountryPageRoutingModule } from './leagues-by-country-routing.module';

import { LeaguesByCountryPage } from './leagues-by-country.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaguesByCountryPageRoutingModule
  ],
  declarations: [LeaguesByCountryPage]
})
export class LeaguesByCountryPageModule {}
