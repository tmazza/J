import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MatchService } from '../../services/match.service';
import { MatchDetailPage } from '../match-detail/match-detail';
import { Match } from './../../models/Match';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public matchService: MatchService) {
  }

  ionViewDidEnter() {
    this.matchService.ordena();
  }

  addMatch():void {
    this.navCtrl.push(MatchDetailPage);
  }

  editMatch(match: Match):void {
    this.navCtrl.push(MatchDetailPage, {
      match: match,      
    });
  }



}