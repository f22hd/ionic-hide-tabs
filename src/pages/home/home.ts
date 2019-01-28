import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';
import { LoginPage } from '../login/login';
import hijri from 'moment-hijri';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mydate;
  mydateHijri;
  
  constructor(public navCtrl: NavController,private app:App,private datePipe:DatePipe) {
    // today date , just used as default value
    this.mydate = this.datePipe.transform(new Date(),'yyyy-MM-dd');
    //  convert to hirji 
    this.changeDate();
  }

  changeDate(){
    // set locale 
    hijri.locale('es'); // set to english numbers , 
    //you can changes to arabic numbers
    // hijri.locale('ar'); // set to english numbers ,    

    const formatHijriDate:string = 'iYYYY-iMM-iDD'; 
    
    this.mydateHijri = hijri(this.mydate,'YYYY-MM-DD').format(formatHijriDate);

  }

  logout(){
    /**
     * we change root page in the application to login , so will remove tabs bar
     * and redirect user to login page.
     */
    this.app.getRootNav().setRoot(LoginPage);
  }

}
