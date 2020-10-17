/**
 

 
 */
import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../functions.service';
import { MenuController, ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { MyModalPage } from '../my-modal/my-modal.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  first_name = '';
  last_name = '';
  email = '';
  password = '';

  constructor(private fun:FunctionsService, private menuCtrl: MenuController, private modalController: ModalController, private data: DataService) { 
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
  }

  signup(){
    if(this.first_name != '' && this.last_name != '' && this.email != '' && this.password != '' && this.fun.validateEmail(this.email)){
      this.fun.navigate('home',false);
    }
    else {
      this.fun.presentToast('Wrong Input', true, 'bottom', 2100);
    }
  }

  async open_modal(b){
    let modal;
    if(b){
      modal = await this.modalController.create({
        component: MyModalPage,
        componentProps: { value: this.data.terms_of_use, title: 'Terms of Use' }
      });
    }
    else{
      modal = await this.modalController.create({
        component: MyModalPage,
        componentProps: { value: this.data.privacy_policy, title: 'Privacy Policy' }
      });
    }
    return await modal.present();
  }

}
