import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AthletesPage } from '../pages/athletes/athletes';
import { AthleteDetailPage } from '../pages/athlete-detail/athlete-detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MatchDetailPage } from '../pages/match-detail/match-detail';
import { MatchViewPage } from '../pages/match-view/match-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { AthleteService } from '../services/athlete.service';
import { MatchService } from '../services/match.service';

@NgModule({
  declarations: [
    MyApp,
    AthletesPage,
    HomePage,
    TabsPage,
    AthleteDetailPage,
    MatchDetailPage,
    MatchViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AthletesPage,
    HomePage,
    TabsPage,
    AthleteDetailPage,
    MatchDetailPage,
    MatchViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AthleteService,
    MatchService
  ]
})
export class AppModule {}
