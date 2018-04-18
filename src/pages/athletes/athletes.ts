import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AthleteService } from '../../services/athlete.service';
import { AthleteDetailPage } from '../athlete-detail/athlete-detail';

@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html'
})
export class AthletesPage {

  constructor(
    private navCtrl: NavController,
    public athleteService: AthleteService) {
  }

  addAthlete():void {
    this.navCtrl.push(AthleteDetailPage, {
      isNew: true,      
    });
  }

  editAthlete(athlete: Athlete):void {
    this.navCtrl.push(AthleteDetailPage, {
      isNew: false,
      athlete: athlete,      
    }); 
  }


}
