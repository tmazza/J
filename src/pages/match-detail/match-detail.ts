import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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
    public athleteService: AthleteService,
    public alertCtrl: AlertController) {

    this.match = this.navParams.get('match');
    this.isNew = !this.match;
    if(this.isNew) {
      this.match = new Match();
    } else {
      this.match = Object.assign({}, this.match);
    }

    setTimeout(()=>{ // TODO: evitar...

      this.players = [];
      for(let a of athleteService.athletes) {
        let selected = this.match.athletes.find(i=>i.id == a.id) !== undefined;
        this.players.push({
          model: a,
          selected: selected,
        });
      }
    }, 500)
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

  update() {
    this.match.athletes = [];
    for(let p of this.players) {
      if(p.selected) {
        this.match.athletes.push(p.model);
      }
    }
    this.matchService.updateMatch(this.match.id, this.match);
    this.navCtrl.pop();
  }
  
  delete() {
    let prompt = this.alertCtrl.create({
      title: 'Excluir',
      message: "Confirma exclusão?",
      buttons: [
        'Cancelar', 
        {
          text: 'Excluir',
          handler: data => {
            this.matchService.deleteMatch(this.match.id);
            this.navCtrl.pop(); 
          }
        }
      ]
    });
    prompt.present();
  }

  countPlayersSelected():number {
    return this.players.filter(i => i.selected).length;
  }

}