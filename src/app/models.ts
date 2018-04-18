export class Athlete {
  id: number;
  name: string;
  position: number;
  attendance: number = 0;
}

export class Match {
  id: number;
  day: string;
  teams: number = 4;
  players: number = 6;
  athletes: Array<Athlete> = [];
}