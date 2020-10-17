import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FunctionsService } from 'src/app/functions.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {

  @Input() Id: string;
  @Input() CategoryType: string;
  @Input() CategoryName: string;
  
  constructor(private modalController: ModalController, private fun: FunctionsService) { }

  ngOnInit() {}

  dismiss(){
     this.fun.dismissAll();
  }

  navigateToForm(type){

  }
}
