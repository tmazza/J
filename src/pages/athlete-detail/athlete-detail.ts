import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AthleteService } from '../../services/athlete.service';
import { Athlete } from '../../models/athlete';

@Component({
  selector: 'page-athlete-detail',
  templateUrl: 'athlete-detail.html',
})
export class AthleteDetailPage {

  public isNew: boolean = true;
  public athlete: {
    name: string,
    position: number,
  } = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private athleteService: AthleteService,
    public alertCtrl: AlertController) {
    this.isNew = this.navParams.get('isNew') || false;
    if(!this.isNew) {
      this.athlete = this.navParams.get('athlete');
    }
  }

  update() {
    this.athleteService.updateAthlete(this.athlete.id, this.athlete);
    this.navCtrl.pop();
  }

  save() {
    this.athleteService.addAthlete(this.athlete);
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
            this.athleteService.deleteAthlete(this.athlete.id);
            this.navCtrl.pop(); 
          }
        }
      ]
    });
    prompt.present();
  }


}
