import { IsWorldChampionPipe } from './is-world-champion.pipe';
import { IDriverStanding } from '../models/driver-standing';
import { WORLD_CHAMPION } from '../../data/testFirstPlaceDriverData';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

describe('IsWorldChampionPipe', () => {
  const pipe = new IsWorldChampionPipe();
  const mockDriver: IDriverStanding = WORLD_CHAMPION.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return true if the driver is the world champion', () => {
    expect(pipe.transform('hamilton', mockDriver)).toBeTruthy();
  });

  it('should return false if the driver is not the world champion of the season', () => {
    expect(pipe.transform('johndoe', mockDriver)).toBeFalsy();
  });
});
