
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, DataService } from '../data.service';
import { FunctionsService } from '../functions.service';
import { IonSlides, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  inputs: ['product', 'slider']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() slider: IonSlides;
  @Output() notify: EventEmitter<Number> = new EventEmitter<Number>();

  slideOpts = {
    effect: 'flip'
  };
  open = [false, false, false, false];
  liked = false;
  constructor(public alertController: AlertController,
    private fun: FunctionsService, private dataService: DataService) { }

  ngOnInit() {
  }

  goToReviews() {
    this.notify.emit(2);
  }

  toogle(i) {
    this.open[i] = !this.open[i];
  }

  remove() {
    this.slider.lockSwipes(true);
  }

  gainback() {
    this.slider.lockSwipes(false);
  }

  like() {
    console.log('like')
    this.liked = !this.liked;
  }


  async createAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Sorry',
      subHeader: 'App not found',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  shareCommon(img) {
    console.log(img);
   
  }
}
