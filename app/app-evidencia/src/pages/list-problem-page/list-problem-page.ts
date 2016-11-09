import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService } from '../../providers/storage-service';
import {ProblemService} from '../../providers/problem-service';
import {Problem} from '../../models/problem';
import {Observable} from 'rxjs/Rx';
/*
  Generated class for the ListProblemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-problem-page',
  templateUrl: 'list-problem-page.html',
  providers: [ProblemService]
})
export class ListProblemPage {

public problems: Problem[];

  constructor(public storage:StorageService, public navCtrl: NavController, public problemService : ProblemService) {
    this.storage.getSession().then(
      data => {
        problemService.operator = data.operator;
        this.getAllProblems();
      },
      error => console.error(error)
    );
  }

  ionViewDidLoad() {
    console.log('Hello ListProblemPage Page');
  }

  getAllProblems(){
    this.problemService.getAllProblems().subscribe(
      projs => {
        this.problems = projs;
    },
    error => {
      return Observable.throw(error);
    });
  }

}
