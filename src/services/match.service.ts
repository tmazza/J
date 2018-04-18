import { Injectable } from '@angular/core';
import { Match } from '../models/Match';

import { Storage } from '@ionic/storage';

@Injectable()
export class MatchService {

  private countID = 'tmz_match_ID';
  private listID = 'tmz_match';
  private count:number;
  
  public matchs:Array<Match> = [];

  constructor(private storage: Storage) {
    this.getList().then(
      data => {
        if((data instanceof Array)) {
          this.matchs = data;
          this.ordena();
        }
      },
      error => console.error(error)
    );
    this.getCount();
  }

  addMatch(match: Match) {
    match.id = this.count++;
    let now = new Date();
    match.day = now.getDate()+'/'+now.getMonth()+'/'+now.getFullYear();
    this.matchs.push(match);
    this.setList();
    this.setCount();
  }

  updateMatch(id: number, data: any) {
    let idx = this.matchs.findIndex(elm => elm.id == id);
    if(this.matchs[idx] !== undefined) {
      this.matchs[idx].teams = data.teams || this.matchs[idx].teams;
      this.matchs[idx].players = data.players || this.matchs[idx].players;
      this.matchs[idx].athletes = data.athletes || this.matchs[idx].athletes;
      this.setList();
    } else {
      console.log('TODO: return erro...');
    }
  }

  deleteMatch(id: number) {
    let idx = this.matchs.findIndex(elm => elm.id == id);
    this.matchs.splice(idx, 1);
    this.setList();
  }

  ordena() {
    this.matchs.sort((a,b) => {
      return b.id - a.id;
    });
  }

  private getCount() {
    return this.storage.get(this.countID).then(data => { 
      let count = JSON.parse(data);
      if(count === null) {
        this.count = 0;
      } else {
        this.count = count;
      }
    })
  }

  private setCount() {
    return this.storage.set(this.countID, JSON.stringify(this.count));
  }

  private getList():Promise<any> {
    return this.storage.get(this.listID).then(data=>JSON.parse(data))
  }

  private setList():Promise<any> {
    return this.storage.set(this.listID, JSON.stringify(this.matchs))
      .then(
        itens => itens,
        error => console.error('Error storing item', error)
      );
  }

}