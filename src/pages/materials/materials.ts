import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-materials',
  templateUrl: 'materials.html',
})
export class MaterialsPage {

  constructor(public views: ViewController, public navParams: NavParams) {
  }
  closeMaterials(){
    this.views.dismiss('MaterialsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialsPage');
  }

}
