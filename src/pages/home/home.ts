import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

splash = true;
tabBarElement: any;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar')
  }

  // Please note that this layout is for the tab layout
  
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }
}
