import { IStanding } from './standing';

export interface IStandingsTable {
  season: string;
  driverStandings: string;
  StandingsList: IStanding[];
}
