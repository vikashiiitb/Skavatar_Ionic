
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductdetailPage } from './productdetail.page';
import { ProductComponent } from '../product/product.component';
import { ReviewComponent } from '../review/review.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: ProductdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [ProductdetailPage, ProductComponent, ReviewComponent],
  entryComponents: [ProductComponent, ReviewComponent]
})
export class ProductdetailPageModule { }
