import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompleteProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete-profile',
  templateUrl: 'complete-profile.html',
})
export class CompleteProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // addOnProfile(fname, name, course){

  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteProfilePage');
  }

}
