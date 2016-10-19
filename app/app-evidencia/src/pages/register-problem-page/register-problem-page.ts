import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import{ ProblemService } from '../../providers/problem-service';
import {BaseService} from '../../providers/base-service';

import{ Problem } from '../../models/Problem';

@Component({
  selector: 'page-register-problem-page',
  templateUrl: 'register-problem-page.html',
  providers: [ProblemService, BaseService]
})
export class RegisterProblemPage {

public registrationForm:any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private problemService: ProblemService) {}

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['',Validators.required],
      MaxCost: ['',Validators.required],
      Categories: ['',Validators.required],
    });
  }
  logForm(){
    console.log(this.registrationForm.value)
  }

}
