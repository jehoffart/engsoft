import {Component, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
	moduleId: module.id,
    selector: 'user-edit',
    templateUrl: '../../../../views/user/form.component.html',
    providers: [ UserService, AuthenticationService ]
})
export class UserEditComponent implements OnInit {
    userForm: FormGroup;
    model: User = new User();
    submitted: boolean = false;
	  private subscription: Subscription;	

    constructor(private _service: UserService,
    			private formBuilder: FormBuilder,
    			private route: ActivatedRoute, 
    			private router: Router,
    			private auth: AuthenticationService) {}
    
    ngOnInit() {
    	this.auth.checkCredentials();
    	
		  this.subscription = this.route.params.subscribe(
			  (params: any) => {
  				var id = params['id'];
				  
				  if(!!id) {
  					this._service.getById(id).subscribe(user => this.model = user);
				  }
    	  }
		  );

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
    }

    onSubmit() {
    	this.submitted = true;

      if(this.userForm.valid) {
    	  this._service.put(this.userForm.value).subscribe(user => this.router.navigate(['user/show/' + user._id]));
      }
	}
}