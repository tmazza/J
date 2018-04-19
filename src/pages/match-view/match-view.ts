import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MatchDetailPage } from '../match-detail/match-detail';
import { Athlete, Match } from './../../app/models';

@Component({
  selector: 'page-match-view',
  templateUrl: 'match-view.html',
})
export class MatchViewPage {

  match:Match;
  noTeam:Array<Athlete> = [];
  teams:any = undefined;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.match = this.navParams.get('match');
    if(!this.match) {
      this.navCtrl.pop();
    }
  }

  editMatch():void {
    this.navCtrl.push(MatchDetailPage, {
      match: this.match,      
    });
  }

  createTeams():void {

    let a = this.match.athletes.filter(i => i.position == 50);
    let b = this.match.athletes.filter(i => i.position == 30);
    let c = this.match.athletes.filter(i => i.position == 10);

    let teams = [];
    for(let i = 0; i < this.match.athletes.length; i++) {
      let round = i % this.match.teams;
      if(teams[round] === undefined) {
        teams[round] = [];
      }
      if(teams[round].length < this.match.players) {
        let athlete = undefined;
        if(a.length > 0) {
          athlete = a.splice(Math.floor((Math.random() * a.length)), 1)[0];
        } else if(b.length > 0) {
          athlete = b.splice(Math.floor((Math.random() * b.length)), 1)[0];
        } else if(c.length > 0) {
          athlete = c.splice(Math.floor((Math.random() * c.length)), 1)[0];
        }
        teams[round].push(athlete);
      }
    }

    this.teams = teams;
    this.noTeam = a.concat(b).concat(c);

  }

}