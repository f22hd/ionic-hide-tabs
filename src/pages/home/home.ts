import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private app:App) {
  }

  logout(){
    /**
     * we change root page in the application to login , so will remove tabs bar
     * and redirect user to login page.
     */
    this.app.getRootNav().setRoot(LoginPage);
  }

}
