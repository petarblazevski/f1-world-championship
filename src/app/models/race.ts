import { IResult } from './result';
import { ICircuit } from './circuit';

export interface IRace {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: ICircuit;
  date: string;
  time: string;
  Results: IResult[];
}
