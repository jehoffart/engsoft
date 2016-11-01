import {Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProblemService } from '../../services/problem.service';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Project } from '../../models/Project';
import { Problem } from '../../models/Problem';
import { User } from '../../models/User';
import { Util } from '../../models/Util';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ModalModule } from "ng2-modal";

@Component({
    selector: 'project-edit',
    templateUrl: '../../../../views/project/form.component.html',
    providers: [ ProjectService, AuthenticationService, UserService, ProblemService ]
})
export class ProjectEditComponent implements OnInit {
    projectForm: FormGroup;
    model: Project = new Project();
    problems: Problem[] = [];
    problem: Problem;
    users: User[] = [];
    submitted: boolean = false;
    submittedUser: boolean = false;
    private subscription: Subscription; 
    private util: Util = new Util();

    userForm: FormGroup;
    userFormModel: User = new User();

    constructor(private _service: ProjectService, 
                private formBuilder: FormBuilder,
                private userService: UserService,
                private problemService: ProblemService,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router) {}

    ngOnInit() {
      this.auth.checkCredentials("project");

      this.projectForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Description: [''],
          Status: [''],
          Cost: ['', this.util.Coin],
          Problem: ['', Validators.required],
          Categories: this.formBuilder.array([this.initCategories()]),
          Users: this.formBuilder.array([
            this.formBuilder.group({user: [this.auth.getToken(), Validators.required]})
          ])
      });

      this.userForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Age: ['', Validators.required],
          Email: ['', Validators.required],
          City: ['', Validators.required],
          State: ['', Validators.required],
          Street: ['', Validators.required],
          About: [''],
          Login: ['', Validators.required],
          Password: ['', Validators.required]
      });

      this.problemService.get().subscribe(
        (problems) => {
          problems.forEach( (problemData: Object) => {
            var problem: Problem = new Problem(problemData);
            this.problems.push(problem);
        });
      });
      
      this.users = this.userService.get();
    }

    initCategories() {
      return this.formBuilder.group({Category: ['', Validators.required]});
    }

    initUsers() {
      return this.formBuilder.group({user: ['', Validators.required]});
    }

    addCategories() {
      const control = <FormArray> this.projectForm.controls['Categories'];
      control.push(this.initCategories());
    }

    createCategory(category: string) {
      const control = <FormArray> this.projectForm.controls['Categories'];
      control.push(this.formBuilder.group({user: [category, Validators.required]}));
    }

    removeCategories(i: number) {
      const control = <FormArray> this.projectForm.controls['Categories'];
      control.removeAt(i);
    }

    addUser() {
      const control = <FormArray> this.projectForm.controls['Users'];
      control.push(this.initUsers());
    }

    createUser(user: User) {
      const control = <FormArray> this.projectForm.controls['Users'];
      control.push(this.formBuilder.group({user: [user._id, Validators.required]}));
    }

    removeUser(i: number) {
      const control = <FormArray> this.projectForm.controls['Users'];
      control.removeAt(i);
    }

    initProject(project: Project) {
      this.model = project;
      for (let u of this.model.Team)
        this.createUser(u);
      for (let c of this.model.Categories)
        this.createCategory(c);
    }

    onSubmit() {
      this.submitted = true;
      if(this.projectForm.valid) {
        
      this.problem = this.projectForm.value.Problem;
      this.model.Team = [];
      this.model.Categories = [];

      for (let c of this.projectForm.value.Categories)
        this.model.Categories.push(c);

      for (let u of this.projectForm.value.Users)
        this.model.Team.push(u);

        this._service.put(this.model.attributes)
            .subscribe(project => this.beforeSaveProject(project));
      }
    }

    beforeSaveUser(userModel: User) {
      this.users.push(userModel);
      const control = <FormArray> this.projectForm.controls['Users'];
      control.push(this.formBuilder.group({user: [userModel._id, Validators.required]}));
    }

    beforeSaveProject(project: Project) {
      this.problemService.addProject(this.problem, project)
          .subscribe(p => this.beforeSaveProblem(p, project));
    }

    beforeSaveProblem(problem: Problem, project: Project) {
      this.router.navigate(['project/show/' + project._id]);
    }
}