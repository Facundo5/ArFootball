import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveBetsPageRoutingModule } from './live-bets-routing.module';

import { LiveBetsPage } from './live-bets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveBetsPageRoutingModule
  ],
  declarations: [LiveBetsPage]
})
export class LiveBetsPageModule {}
