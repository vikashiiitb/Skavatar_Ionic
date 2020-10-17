import { Component, OnInit, Input } from '@angular/core';
import { FunctionsService } from '../functions.service';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() Id: string;
  @Input() CategoryType: string;
  @Input() CategoryName: string;
  
  constructor(private fun: FunctionsService) {

   }

  ngOnInit() {
    this.fun.presentModal(SubCategoriesComponent,{
        "Id":this.Id,
        "CategoryType":this.CategoryType,
        "CategoryName": this.CategoryName,
      },"");
  }

}
