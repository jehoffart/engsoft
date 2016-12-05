import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { AuthenticationService } from '../../services/authentication.service';
import { ShowController } from './../showcontroller';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: '../../../../views/user/show.component.html',
    providers: [ UserService, AuthenticationService ]
})
export class UserShowComponent extends ShowController implements OnInit {
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service: UserService) {
      super(route, router, auth, _service, 'user');
      this.model = new User();
    }

    ngOnInit() {
      this.GetModel();
    }

    GetModel() {
        this._service.getById(this.getLoginId()).subscribe(data => this.model = data);
    }
}