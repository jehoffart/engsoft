import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RegisterProjectPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-project-page',
  templateUrl: 'register-project-page.html'
})
export class RegisterProjectPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterProjectPage Page');
  }

}
