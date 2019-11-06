import { ILocation } from './location';

export interface ICircuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: ILocation;
}
