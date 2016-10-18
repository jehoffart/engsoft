import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Enterprise } from '../../models/Enterprise';
import { EnterpriseService } from '../../services/enterprise.service';

@Component({
    selector: 'enterprise-list',
    templateUrl: '../../../../views/enterprise/list.component.html',
    providers: [ EnterpriseService ]
})
export class ProblemListComponent implements OnInit {
    enterprises: Enterprise[] = [];
        
    constructor(private _service: EnterpriseService) {};

    ngOnInit() {
    	this.enterprises = this._service.get();
    }
};