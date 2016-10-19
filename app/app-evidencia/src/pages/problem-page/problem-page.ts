import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProblemService} from '../../providers/problem-service';
import {BaseService} from '../../providers/base-service';
/*
  Generated class for the ProblemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-problem-page',
  templateUrl: 'problem-page.html',
  providers: [ProblemService,BaseService]
})
export class ProblemPage {

  constructor(public navCtrl: NavController, private problemService : ProblemService) {

  }

  ionViewDidLoad() {
    console.log('Hello ProblemPage Page');
  }

}
