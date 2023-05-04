import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveMatchesPageRoutingModule } from './live-matches-routing.module';

import { LiveMatchesPage } from './live-matches.page';
@NgModule({
    declarations: [LiveMatchesPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LiveMatchesPageRoutingModule,
    ]
})
export class LiveMatchesPageModule {}
