import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 @Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  open(){
    /**
     *   logged in user into the application, 
     *   redirect him to tabs page which is home page will open first
     */
    this.navCtrl.setRoot(TabsPage); 
  }

  register(){
    // with back button in header
    this.navCtrl.push(RegisterPage);
    // without
  //  this.navCtrl.setRoot(RegisterPage);
  }

}
