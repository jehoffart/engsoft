import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to home page"
    };

    ngOnInit() {
    }
};