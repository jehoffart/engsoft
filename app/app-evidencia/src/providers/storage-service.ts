import { Injectable } from '@angular/core';
import { NativeStorage } from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {

  constructor() {
    console.log('Hello StorageService Provider');
  }

  setSession(operator:any ){
    return NativeStorage.setItem('session-evidencia', {operator: operator});
  }

  getSession(){
    return NativeStorage.getItem('session-evidencia');
  }

}
