import { ITime } from './time';
import { IAverageSpeed } from './average-speed';

export interface IFastestLap {
  rank: string;
  lap: string;
  Time: ITime;
  AverageSpeed: IAverageSpeed;
}
