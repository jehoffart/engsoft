import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Project } from '../../models/Project';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'project-create',
    templateUrl: '../../../../views/project/form.component.html',
    providers: [ ProjectService, AuthenticationService ]
})
export class ProjectCreateComponent implements OnInit {
    projectForm: FormGroup;
    model: Project = new Project();
    submitted: boolean = false;
    private util: Util = new Util();

    constructor(private _service: ProjectService, 
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router) {

      this.projectForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Description: [''],
          Status: [''],
          Cost: ['', this.util.Coin]
      });
    }

    ngOnInit() {
      this.auth.checkCredentials();
    }

    onSubmit() {
      this.submitted = true;

      if(this.projectForm.valid) {
        this._service.post(this.projectForm.value).subscribe(project => 
          this.router.navigate(['project/show/' + project._id]));
        }
      }
}