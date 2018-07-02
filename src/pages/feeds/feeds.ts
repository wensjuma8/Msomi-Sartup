import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsPage {

  constructor(public view: ViewController, public navParams: NavParams) {
  }
  dismissFeeds(){
    this.view.dismiss('FeedsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');
  }

}
