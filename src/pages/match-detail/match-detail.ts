import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MatchService } from '../../services/match.service';
import { AthleteService } from '../../services/athlete.service';

import { Athlete } from './../../models/Athlete';
import { Match } from './../../models/Match';

@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html',
})
export class MatchDetailPage {
  
  public isNew: boolean = true;
  public match: Match;
  public players: Array<{model:Athlete, selected:boolean}> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public matchService: MatchService,
    public athleteService: AthleteService) {

    this.match = this.navParams.get('match');
    this.isNew = !this.match;
    if(this.isNew) {
      this.match = new Match();
    } else {
      this.match = Object.assign({}, this.match);
    }

    this.players = [];
    for(let a of athleteService.athletes) {
      console.log(a);
      this.players.push({
        model: a,
        selected: false,
      });
    }
  }

  save() {
    for(let p of this.players) {
      if(p.selected) {
        this.match.athletes.push(p.model);
      }
    }
    this.matchService.addMatch(this.match);
    this.navCtrl.pop();
  }

  // update() {
  //   this.matchService.updateMatch(this.athlete.id, this.athlete);
  //   this.navCtrl.pop();
  // }
  // 
  // delete() {
  //   let prompt = this.alertCtrl.create({
  //     title: 'Excluir',
  //     message: "Confirma exclusão?",
  //     buttons: [
  //       'Cancelar', 
  //       {
  //         text: 'Excluir',
  //         handler: data => {
  //           this.athleteService.deleteAthlete(this.athlete.id);
  //           this.navCtrl.pop(); 
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }

}