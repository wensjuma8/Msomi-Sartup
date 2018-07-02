import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
 

  constructor(public modal: ModalController, private navCtrl:NavController) {
  }
  profileComplete(){
    this.navCtrl.push('CompleteProfilePage');
  }
  openFeeds(){
    const fdModule=this.modal.create('FeedsPage');
    fdModule.present();
  }
  openPosts(){
    const pstModule=this.modal.create('MyPostsPage');
    pstModule.present();
  }
  openMaterials(){
    const mtrModule=this.modal.create('MaterialsPage');
    mtrModule.present();
  }
  openMain(){
    const mainModule=this.modal.create('MainPage');
    mainModule.present();
  }
  

   ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
