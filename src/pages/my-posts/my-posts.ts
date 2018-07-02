import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-my-posts',
  templateUrl: 'my-posts.html',
})
export class MyPostsPage {

  constructor( private navParams: NavParams, public view: ViewController) {
  }
  closePosts(){
    this.view.dismiss('MyPostsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPostsPage');
  }

}
