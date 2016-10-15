import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RegisterStudentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-student-page',
  templateUrl: 'register-student-page.html'
})
export class RegisterStudentPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterStudentPage Page');
  }

}
