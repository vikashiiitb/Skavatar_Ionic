import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPage } from './chat.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: ChatPage,
            children: [
              {
                path: 'all',
                loadChildren: () => import('../chat/all/all.module').then( m => m.AllPageModule)
              },
              {
                path: 'buying',
                loadChildren: () => import('../chat/buying/buying.module').then( m => m.BuyingPageModule)
              },
              {
                path: 'selling',
                loadChildren: () => import('../chat/selling/selling.module').then( m => m.SellingPageModule)
              },
              {
                path: '',
                redirectTo: 'all',
                pathMatch: 'full'
              }
            ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
