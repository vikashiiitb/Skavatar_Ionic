import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();  
    this.initializeApp();
  }

  sideMenu() {  
    this.navigate =   
    [  
        { 
        title : 'App',
        url   : '/apps',
        icon  : 'apps' 
        },
      { 
        title : 'Book',  
        url   : '/book',  
        icon  : 'book'  
      },   
      {  
        title : 'Paint',  
        url   : '/paint',  
        icon  : 'brush'   
      },  
      {  
        title : 'Contacts',  
        url   : '/contacts',  
        icon  : 'contacts'  
      },   
      {
          title : 'Facebook',
          url   : '/facebook.com',
          icon  : 'logo-facebook'
      },
    ];  
  }  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
