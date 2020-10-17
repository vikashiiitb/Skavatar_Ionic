import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';
import { ProductlistPage } from '../../productlist/productlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    ExplorePageRoutingModule
  ],
  declarations: [ExplorePage, ProductlistPage],
  entryComponents: [ProductlistPage]
})
export class ExplorePageModule {}
