import { IDriverStanding } from './driver-standing';

export interface IStanding {
  season: string;
  round: string;
  DriverStandings: IDriverStanding[];
}
