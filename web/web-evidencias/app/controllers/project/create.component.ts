import { Component, OnInit } from '@angular/core';
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
import { ModalModule } from "ng2-modal";

@Component({
    selector: 'project-create',
    templateUrl: '../../../../views/project/form.component.html',
    providers: [ ProjectService, AuthenticationService, UserService, ProblemService ]
})
export class ProjectCreateComponent implements OnInit {
    projectForm: FormGroup;
    problems: Problem[] = [];
    problem: Problem;
    users: User[] = [];
    model: Project = new Project();
    submitted: boolean = false;
    submittedUser: boolean = false;
    private util: Util = new Util();

    userForm: FormGroup;
    userFormModel: User = new User();

    constructor(private _service: ProjectService, 
                private userService: UserService,
                private problemService: ProblemService,
                private formBuilder: FormBuilder,
                private auth: AuthenticationService,
                private route: ActivatedRoute, 
                private router: Router) {}

    ngOnInit() {
      this.auth.checkCredentials();

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

    onSubmit() {
      this.submitted = true;
      if(this.projectForm.valid) {
        
      this.problem = this.projectForm.value.Problem;

      for (let c of this.projectForm.value.Categories)
        this.model.addCategory(c.Category);

      for (let u of this.projectForm.value.Users)
        this.model.addUser(u);

        this._service.post(this.model.attributes).subscribe(project => this.bindProblem(project));
      }
    }

    bindProblem(project: Project) {
      this.problemService.addProject(this.problem, project).subscribe(p =>
        this.router.navigate(['project/show/' + project._id])
      )
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

    removeCategories(i: number) {
      const control = <FormArray> this.projectForm.controls['Categories'];
      control.removeAt(i);
    }

    addUser() {
      const control = <FormArray> this.projectForm.controls['Users'];
      control.push(this.initUsers());
    }

    createUser(userModel: User) {
      this.users.push(userModel);
      const control = <FormArray> this.projectForm.controls['Users'];
      control.push(this.formBuilder.group({user: [userModel._id, Validators.required]}));
    }

    removeUser(i: number) {
      const control = <FormArray> this.projectForm.controls['Users'];
      control.removeAt(i);
    }

    saveUser() {
      this.submittedUser = true;
 
      if(this.userForm.valid) {
        this.userService.post(this.userForm.value).subscribe(user => this.createUser(user));
      }
    }
}