import { Component, OnInit } from '@angular/core';
import { Platform, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FunctionsService } from '../functions.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private fun: FunctionsService,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private data: DataService) { }

  ngOnInit() {
  }

  signin() {
    this.fun.navigate("signin", true);
  }
  goToSupport(){
    this.fun.navigateWithParam("helpsupport",{ state : { value: this.data.terms_of_use, title: 'Terms of Use' } });
  }
}
