import { IRaceTable } from './race-table';
import { IStandingsTable } from './standings-table';

export interface IMotorRaceData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable?: IRaceTable;
  StandingsTable?: IStandingsTable;
}
