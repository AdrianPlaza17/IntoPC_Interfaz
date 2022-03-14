import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
export const firebaseConfig = {
  apiKey: "AIzaSyCzY709Mpl9I8u5-GtFTCKlmDVukJiLAsk",
  authDomain: "hito2-a7371.firebaseapp.com",
  projectId: "hito2-a7371",
  storageBucket: "hito2-a7371.appspot.com",
  messagingSenderId: "360905648992",
  appId: "1:360905648992:web:93e8e0c5c5d0e970908c05",
  measurementId: "G-LHQF3L9QS3"
  }
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
