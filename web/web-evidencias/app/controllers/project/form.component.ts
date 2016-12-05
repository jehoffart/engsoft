import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProblemService } from '../../services/problem.service';
import { UserService } from '../../services/user.service';
import { Project } from '../../models/project';
import { Problem } from '../../models/problem';
import { User } from '../../models/user';
import { ModalModule } from "ng2-modal";
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormController } from './../formcontroller';

@Component({
    templateUrl: '../../../../views/project/form.component.html',
    providers: [ AuthenticationService, ProjectService, ProblemService, UserService ]
})
export class ProjectFormComponent extends FormController implements OnInit {
   
    private users: User[] = new Array();
    private problems: Problem[] = new Array();
    private userForm: FormGroup;
    private userError: {};
    private user: User = new User();
    private submittedUser = false;
    private problemId: string;
    private problem: Problem = new Problem();

    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: ProjectService,
                protected formBuilder: FormBuilder,
                private userService: UserService,
                private problemService: ProblemService) {
      super(route, router, auth, _service, formBuilder, 'project');
      this.model = new Project();
      this.problemService.get().subscribe(data => this.problems = data);
      this.refreshUser();
    }

    refreshUser() {
        this.userService.get().subscribe(data => this.users = data);
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            Name: ['', Validators.required],
            Problem: ['', Validators.required],
            Description: [''],
            Status: ['', Validators.required],
            Cost: ['', [Validators.required, this.validation.ValidCoin]],
            Categories: this.formBuilder.array([]),
            Users: this.formBuilder.array([]),
            Answers: this.formBuilder.array([])
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
    
        this.error = this.errorObj.initError(this.form);
        this.userError = this.errorObj.initError(this.userForm);
        
        this.GetModel();
    }    

    afterSave(data) {
        var obj = {Project: data, Answers: new Array()};
        this.problemService.addProject(this.problemId, obj).subscribe(data => this.afterAddProblem(data));
    }

    afterAddProblem(data) {
        this.router.navigate([this.entry + '/show/' + data._id])
    }

    afterGetModel(data) {
        this.problemService.getByProject(data._id).subscribe(data => this.problemId = data);

        this.model = data;
        
        for(var i = 0; i < this.model.Categories.length; i++){
            this.addCategory(false);
        }

        for(var i = 0; i < this.model.Team.length; i++){
            this.addUsers(false);
        }
    }

    initCategory(add) {
        if(!this.model.Categories) this.model.Categories = new Array();
        if(add) this.model.Categories.push('');

        return this.formBuilder.group({
            Category: ['', Validators.required]
        });
    }

    addCategory(add) {
        const control = <FormArray> this.form.controls['Categories'];
        control.push(this.initCategory(add));
        this.error = this.errorObj.getError(this.form);
    }

    delCategory() {
      const control = <FormArray> this.form.controls['Categories'];
      control.removeAt(control.length - 1);
      this.model.Categories.pop();
      this.error = this.errorObj.getError(this.form);
    }

    initUsers(add) {
        if(!this.model.Team) this.model.Team = new Array();
        if(add) this.model.Team.push(new User());

        return this.formBuilder.group({
            User: ['', Validators.required]
        });
    }

    addUsers(add) {
        const control = <FormArray> this.form.controls['Users'];
        control.push(this.initUsers(add));
        this.error = this.errorObj.getError(this.form);
    }

    delUsers() {
      const control = <FormArray> this.form.controls['Users'];
      control.removeAt(control.length - 1);
      this.model.Team.pop();
      this.error = this.errorObj.getError(this.form);
    }

    beforeSave() {}

    saveUser() {
        this.submittedUser = true;
      
        if(!this.userForm.valid) {
            this.userError = this.errorObj.getError(this.userForm);
            return;
        }

        this.userService.post(this.user).subscribe(data => this.afterSaveUser(data));
    }

    afterSaveUser(data) {
        this.user = new User();
        this.refreshUser();
    }
}