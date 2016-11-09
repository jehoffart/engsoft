import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MyProjectsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-projects-page',
  templateUrl: 'my-projects-page.html'
})
export class MyProjectsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyProjectsPage Page');
  }

}
