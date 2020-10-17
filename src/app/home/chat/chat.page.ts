import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService, HomeTab } from '../../data.service';
import { FunctionsService } from '../../functions.service';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  @ViewChild('Slides') slides: IonSlides;

  index = 0;
  segment = '';
  rewards;

  data: Array<HomeTab>;

  subtab = ['Available', 'Used'];
  sub;

  constructor(private dataService: DataService, private fun: FunctionsService, private router: Router) {
    this.data = dataService.chat_tab;
    this.segment = this.data[0].title;
    this.rewards = dataService.rewards;
    this.sub = this.subtab[0];
   }

  ionViewDidEnter(){
  }

  send(){
   
  }

  navigateTo(link: String) {
    const url = this.router.url.split('/');

    if (url.length >= 4) {
      url.pop();
    }
    this.router.navigate([`${url.join('/')}/${link}`]);
  }

  
  async change() {
    await this.slides.getActiveIndex().then(d => this.index = d);
    this.segment = this.data[this.index].title;
    this.drag();
  }

  drag() {
    // var element : any = document.getElementsByClassName('my-btn')[this.index + 1];
    document.getElementById('dag').scrollLeft = this.index * 150;
  }

  update(i) {
    this.navigateTo(this.data[i].title.toLowerCase());
    //this.slides.slideTo(i);
  }

  update2(i) {
    this.sub = this.subtab[i];
  }

  seg(event) {
    this.segment = event.detail.value;
  }

  segmentChanged(ev: any) {
    this.sub = ev.detail.value;
  }

}
