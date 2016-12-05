import { BaseController } from './basecontroller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Validation } from './../models/validation';
import { Error } from './../models/error';
import { AuthenticationService } from '../services/authentication.service';

export abstract class FormController extends BaseController {
    protected form: FormGroup;
    protected model;
    protected validation: Validation = new Validation();
    protected errorObj: Error = new Error();
    protected submitted: boolean = false;
    protected error;
    
    constructor(protected route: ActivatedRoute, 
                protected router: Router,
                protected auth: AuthenticationService,
                protected _service,
                protected formBuilder: FormBuilder,
                protected entry: string) {
      super(route, router, auth, _service, entry);
    }

    GetModel() {
      this.route.params.subscribe((params: any) => {
        var id = params['id'];
        if(id) this._service.getById(id).subscribe(data => this.afterGetModel(data));
      });
    }

    onSubmit() {
      this.beforeSave();

      this.submitted = true;
      
      if(!this.form.valid) {
        this.error = this.errorObj.getError(this.form);
        return;
      }

      if(!this.model._id) this._service.post(this.model).subscribe(data => this.afterSave(data));
      else this._service.put(this.model).subscribe(data => this.afterSave(data));
    }

    abstract afterSave(data);
    abstract beforeSave();
    abstract afterGetModel(data);
}