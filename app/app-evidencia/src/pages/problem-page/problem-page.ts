import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ProblemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-problem-page',
  templateUrl: 'problem-page.html'
})
export class ProblemPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProblemPage Page');
  }

}
