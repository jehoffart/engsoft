import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ProjectService } from '../../providers/project-service';

@Component({
  templateUrl: 'item-details.html',
  providers:[ProjectService]
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
