import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellPageRoutingModule } from './sell-routing.module';

import { SellPage } from './sell.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesComponent } from 'src/app/categories/categories.component';
import { GenericFormComponent } from 'src/app/categories/generic-form/generic-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    SellPageRoutingModule
  ],
  entryComponents : [CategoriesComponent, GenericFormComponent],
  declarations: [SellPage, CategoriesComponent,GenericFormComponent]
})
export class SellPageModule {}
