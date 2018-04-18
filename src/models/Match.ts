import { Athlete } from './Athlete';

export class Match {
  id: number;
  day: string;
  teams: number = 4;
  players: number = 6;
  athletes: Array<Athlete> = [];
}