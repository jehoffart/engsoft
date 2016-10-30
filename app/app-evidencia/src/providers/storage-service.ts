import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NativeStorage } from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {

  public storage;

  constructor(public http: Http) {
    console.log('Hello StorageService Provider');
  }

  getToken() {
    console.log("Buscando token");
    return NativeStorage.getItem('token');
  }

  insertToken(token: string) {
    console.log("Inserindo token");
   return NativeStorage.setItem('token', {tk: token});
 }

}
