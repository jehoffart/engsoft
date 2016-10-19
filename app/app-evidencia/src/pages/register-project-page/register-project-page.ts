import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import{ ProjectService } from '../../providers/project-service';
import {BaseService} from '../../providers/base-service';

import{ Project } from '../../models/Project';

@Component({
  selector: 'page-register-project-page',
  templateUrl: 'register-project-page.html',
  providers: [ProjectService, BaseService]
})
export class RegisterProjectPage {

public registrationForm:any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private projectService: ProjectService) {}

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['',Validators.required],
      Status: ['',Validators.required],
      RegistrationDate: [new Date()],
      Cost: ['', Validators.required],
      Categories: [''],
      Team: ['']
    });
  }
  logForm(){
    console.log(this.registrationForm.value)
  }
}
