import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {

  title = '';
  value = '';

  constructor(private router: Router,) {
    const state = this.router.getCurrentNavigation().extras.state
    if (state) {
      this.title = state.title;
      this.value = state.value;
    }
  }

  ngOnInit() {
  }

  dismiss() {
    
  }

}
