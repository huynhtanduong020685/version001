import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AutoCompleteModule } from 'ionic2-auto-complete';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UtilProvider } from '../providers/util/util';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { AppProvider } from '../providers/app/app';
import { HomestayDetailPage } from '../pages/homestay-detail/homestay-detail';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PipesModule } from '../pipes/pipes.module';
import { LocalDetailPage } from '../pages/local-detail/local-detail';
import { HomestayViewPage } from '../pages/homestay-view/homestay-view';
import { ChatsPage } from '../pages/chats/chats';
import { ComponentsModule } from '../components/components.module';

export const firebaseConfig = {
    apiKey: "AIzaSyD_equ0f6giRgKXfjBulBRQEMHGfMdJaeg",
    authDomain: "facetrip-1f84e.firebaseapp.com",
    databaseURL: "https://facetrip-1f84e.firebaseio.com",
    projectId: "facetrip-1f84e",
    storageBucket: "facetrip-1f84e.appspot.com",
    messagingSenderId: "684733354250",
    appId: "1:684733354250:web:6102e8fcf95e4a24"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EditProfilePage,
    HomestayDetailPage,
    LocalDetailPage,
    HomestayViewPage,
    ChatsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: false,
    }),
    IonicStorageModule.forRoot({
      name: '_facetrip',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    PipesModule,
    AutoCompleteModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EditProfilePage,
    HomestayDetailPage,
    LocalDetailPage,
    HomestayViewPage,
    ChatsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UtilProvider,
    AppProvider
  ]
})
export class AppModule { }
