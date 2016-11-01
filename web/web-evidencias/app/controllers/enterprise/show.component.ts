import {Component, OnInit} from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Enterprise } from '../../models/Enterprise';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'enterprise-show',
    templateUrl: '../../../../views/enterprise/show.component.html',
    providers: [ EnterpriseService, AuthenticationService ]
})
export class EnterpriseShowComponent implements OnInit {
    model: Enterprise = new Enterprise();
    private subscription: Subscription;

    constructor(private _service: EnterpriseService, 
                private auth: AuthenticationService,
                private route: ActivatedRoute) {}

    ngOnInit() {
      this.auth.checkCredentials("enterprise");
      
      this.subscription = this.route.params.subscribe(
      (params: any) => {
        var id = params['id'];
        
        if(!!id) {
          this._service.getById(id).subscribe(enterprise => this.model = enterprise);
        }
          }
      );
    }
}