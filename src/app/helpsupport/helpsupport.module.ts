import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpsupportPageRoutingModule } from './helpsupport-routing.module';

import { HelpsupportPage } from './helpsupport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpsupportPageRoutingModule
  ],
  declarations: [HelpsupportPage]
})
export class HelpsupportPageModule {}
