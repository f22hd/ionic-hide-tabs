import { Component , ViewChild } from '@angular/core';
import { Platform, Nav  , NavController, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  /*
   * assign page component as first page shown in the application.
   * in our situation will be loginPage .
  */
  rootPage:any = HomePage; 


  GuestUserPages = [
    {
      title: 'Login',
      component:LoginPage
    },
    {
      title:'Register',
      component:RegisterPage
    },
    {
      title:'About',
      component:AboutPage
    }
  ];

  LoggedInUserPages = [
    {
      title: 'Home',
      component:HomePage
    },
    {
      title:'Contact',
      component:ContactPage
    }
  ];

  sideMenuList = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.trackingNavigation();
      
    });

    

  }

  private trackingNavigation(){
    // tracking every navigation between pages , 
    // then will define which pages should added into side menu list
      this.nav.viewDidEnter.subscribe((view:ViewController) => {
      if( this.GuestUserPages.filter(page => page.component == view.component ).length > 0 ){
          this.sideMenuList = this.GuestUserPages;
        }else{
          this.sideMenuList = this.LoggedInUserPages;
        }
      });
  }

  goToPage(page){
    this.nav.setRoot(page.component);
  }
}
