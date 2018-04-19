export class Athlete {
  id: number;
  name: string;
  position: number;
  attendance: number = 0;
}

export class Match {
  id: number;
  day: string;
  number_teams: number = 4;
  players: number = 6;
  athletes: Array<Athlete> = [];
  teams: any = [];
  noTeam: Array<Athlete> = [];
}