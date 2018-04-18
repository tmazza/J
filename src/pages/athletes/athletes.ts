import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AthleteService } from '../../services/athlete.service';
import { AthleteDetailPage } from '../athlete-detail/athlete-detail';

import { Athlete } from './../../app/models';

@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html'
})
export class AthletesPage {

  constructor(
    private navCtrl: NavController,
    public athleteService: AthleteService) {
  }

  ionViewDidEnter() {
    this.athleteService.ordena();
  }

  addAthlete():void {
    this.navCtrl.push(AthleteDetailPage);
  }

  editAthlete(athlete: Athlete):void {
    this.navCtrl.push(AthleteDetailPage, {
      athlete: athlete,      
    }); 
  }


}
