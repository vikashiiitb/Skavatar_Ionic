import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { SellPage } from './sell/sell.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController : ModalController) {}

  async  openSellPopup(){
    const modal = await this.modalController.create({
      component: SellPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }  

}
