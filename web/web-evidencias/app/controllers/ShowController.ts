import { BaseController } from './basecontroller';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

export abstract class ShowController extends BaseController {
    protected model;

    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service, 
                protected entry: string) {
      super(route, router, auth, _service, entry);
    }

    GetModel() {
      this.route.params.subscribe((params: any) => {
        var id = params['id'];
        if(id) this._service.getById(id).subscribe(data => this.model = data);
      });
    }

    Delete(id) {
      this._service.delete(id).subscribe((data) => {
        this.router.navigate([this.entry]);
      });
    }
}