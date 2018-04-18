import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MatchService } from '../../services/match.service';
import { MatchDetailPage } from '../match-detail/match-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public matchservice: MatchService) { }

  addMatch():void {
    this.navCtrl.push(MatchDetailPage);
  }

}