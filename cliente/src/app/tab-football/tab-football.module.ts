import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFootballPageRoutingModule } from './tab-football-routing.module';

import { TabFootballPage } from './tab-football.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFootballPageRoutingModule
  ],
  declarations: [TabFootballPage],
  exports: [
    TabFootballPage
  ]
})
export class TabFootballPageModule {}
