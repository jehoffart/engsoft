import {Component} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: 'about.component.html'
})
export class AboutComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to about page"
    };
};