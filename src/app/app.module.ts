import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

 var config = {
  apiKey: "AIzaSyCUpJ-yALTEs7Z3ZpZNCk0fvB922XjoeWI",
  authDomain: "msomimodel.firebaseapp.com",
  databaseURL: "https://msomimodel.firebaseio.com",
  projectId: "msomimodel",
  storageBucket: "msomimodel.appspot.com",
  messagingSenderId: "598368644986"
};
@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    //AngularFireModule.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    //firebase.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    //AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
}