import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, ModalController } from '@ionic/angular';
import { HomeTab, Product, DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from '../../functions.service';
import { SellPage } from '../sell/sell.page';
import { MyModalPage } from 'src/app/my-modal/my-modal.page';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage {

  
  @ViewChild('Slides') slides: IonSlides;

  segment = '';
  index = 0;
  data: Array<HomeTab> = [];
  sponsored: Array<Product> = [];
  product_data_1: Array<Product> = [];
  product_data_2: Array<Product> = [];
  product_data_3: Array<Product> = [];
  product_data_4: Array<Product> = [];
  product_data_5: Array<Product> = [];
  slideOpts = {
    effect: 'flip',
    zoom: false,
    pager: true,
    paginationType: "bullets",
    autoplay:true,
    speed: 400,
    slidesPerView: 2.5,
    spaceBetween: 10 
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private menuCtrl: MenuController,
    private fun: FunctionsService,
    private dataService: DataService,
    public modalController : ModalController) {
    this.data = dataService.tabs;
    this.sponsored = dataService.sponsored;
    this.product_data_1 = dataService.products_1;
    this.product_data_2 = dataService.products_2;
    this.product_data_3 = dataService.products_3;
    this.product_data_4 = dataService.products_4;
    this.product_data_5 = dataService.products_5;
    const d = this.activatedRoute.snapshot.paramMap.get('id');
    if (d) {
      this.segment = this.data[parseInt(d, 10)].title;
    } else {
      this.segment = this.data[0].title;
    }
  }
  
  ngAfterViewInit(){
    this.slides.pager = true;
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

  seg(event) {
    this.segment = event.detail.value;
  }

  drag() {
    
  }

  preventDefault(e) {
    e.preventDefault();
  }

  async change() {
    await this.slides.getActiveIndex().then(data => this.index = data);
    this.segment = this.data[this.index].title;
    this.drag();
  }

  side_open() {
    this.menuCtrl.toggle('end');
  }

  update(i) {
    this.slides.slideTo(i).then((res) => console.log('responseSlideTo', res));
  }

}
