import {Component, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/User';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'user-show',
    templateUrl: '../../../../views/user/show.component.html',
    providers: [ UserService, AuthenticationService ]
})
export class UserShowComponent implements OnInit {
    model: User = new User();
    private subscription: Subscription;

    constructor(private _service: UserService, 
                private auth: AuthenticationService,
                private route: ActivatedRoute) {}

    ngOnInit() {
      this.auth.checkCredentials("user");
      
      this.subscription = this.route.params.subscribe(
      (params: any) => {
        var id = params['id'];
        
        if(!!id) {
          this._service.getById(id).subscribe(user => this.model = user);
        }
          }
      );
    }
}