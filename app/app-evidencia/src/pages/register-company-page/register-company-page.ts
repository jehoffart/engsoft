import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RegisterCompanyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-company-page',
  templateUrl: 'register-company-page.html'
})
export class RegisterCompanyPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterCompanyPage Page');
  }

}
