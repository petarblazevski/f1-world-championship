import { IDriver } from './driver';
import { IConstructor } from './constructor';

export interface IDriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: IDriver;
  Constructors: IConstructor[];
}
