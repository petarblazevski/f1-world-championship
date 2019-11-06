import { IDriver } from './driver';
import { IConstructor } from './constructor';
import { ITime } from './time';
import { IFastestLap } from './fastest-lap';

export interface IResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: IDriver;
  Constructor: IConstructor;
  grid: string;
  laps: string;
  status: string;
  Time: ITime;
  FastestLap: IFastestLap;
}
