import { Component } from '@angular/core';

import { AthletesPage } from '../athletes/athletes';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabPartidas = HomePage;
  tabAtletas = AthletesPage;

  constructor() { }

}