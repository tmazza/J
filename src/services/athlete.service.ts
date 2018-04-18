import { Injectable } from '@angular/core';
import { Athlete } from '../models/Athlete';

import { Storage } from '@ionic/storage';

@Injectable()
export class AthleteService {

  private countID = 'tmz_athletes_ID';
  private listID = 'tmz_athletes';
  private count:number;
  
  public athletes:Array<Athlete> = [];

  constructor(private storage: Storage) {
    this.getList().then(
      data => {
        if((data instanceof Array)) {
          this.athletes = data;
          this.ordena();
        }
      },
      error => console.error(error)
    );
    this.getCount();
  }

  addAthlete(athlete: Athlete) {
    athlete.id = this.count++;
    this.athletes.push(athlete);
    this.setList();
    this.setCount();
  }

  updateAthlete(id: number, data: any) {
    let idx = this.athletes.findIndex(elm => elm.id == id);
    if(this.athletes[idx] !== undefined) {
      this.athletes[idx].name = data.name || this.athletes[idx].name;
      this.athletes[idx].position = data.position || this.athletes[idx].position;
      this.setList();
    } else {
      console.log('TODO: return erro...');
    }
  }

  deleteAthlete(id: number) {
    let idx = this.athletes.findIndex(elm => elm.id == id);
    this.athletes.splice(idx, 1);
    this.setList();
  }

  ordena() {
    this.athletes.sort((a,b) => {
      let sa = a.name.toLowerCase();
      let sb = b.name.toLowerCase();
      if(sa < sb) return -1;
      if(sa > sb) return 1;
      return 0;
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
    return this.storage.set(this.listID, JSON.stringify(this.athletes))
      .then(
        itens => itens,
        error => console.error('Error storing item', error)
      );
  }

}