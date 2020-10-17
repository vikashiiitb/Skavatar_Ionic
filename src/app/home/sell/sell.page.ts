import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FunctionsService } from 'src/app/functions.service';
import { CategoriesComponent } from 'src/app/categories/categories.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {

  constructor(private modalController: ModalController,private fun: FunctionsService) { }

  ngOnInit() {
  }

  openCategories(data){
    this.fun.presentModal(CategoriesComponent,{
      'Id':"",
      'CategoryType':"Generic",
      'CategoryName': data,
    },"");
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
