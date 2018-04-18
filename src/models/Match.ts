import { Athlete } from './Athlete';

export class Match {
  id: number;
  day: string;
  teams: number;
  players: number;
  athletes: Array<Athlete> = [];
}