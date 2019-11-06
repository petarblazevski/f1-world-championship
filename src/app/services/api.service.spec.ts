import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { RESULTS_DATA } from '../../data/testResultsData';
import { WORLD_CHAMPION } from '../../data/testFirstPlaceDriverData';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(ApiService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all championships for a given year', () => {
    const year = 2008;
    service.getResultsByYear(year).subscribe(data => {
      expect(data).toBeTruthy('No championships returned');
      expect(data.MRData).toBeTruthy();

      const { series, RaceTable } = data.MRData;

      expect(series).toEqual('f1');
      expect(RaceTable.season).toEqual(year.toString(), 'Wrong year retrieved');
      expect(RaceTable.position).toEqual('1');
      expect(RaceTable.Races.length).toEqual(18);

      const firstRace = RaceTable.Races[0];

      expect(firstRace.raceName).toEqual('Australian Grand Prix');
      expect(firstRace.Results[0].Driver.driverId).toEqual('hamilton');
    });

    const req = httpTestingController.expectOne(`${environment.motorRacingApiEndpoint}/${year}/results/1.json`);
    expect(req.request.method).toEqual('GET');

    req.flush(RESULTS_DATA);
  });

  it('should get the world champion for a given year', () => {
    const year = 2008;

    service.getWorldChampionByYear(year).subscribe(data => {
      expect(data).toBeTruthy('No champion retrieved');
      expect(data.MRData).toBeTruthy();

      const { StandingsTable, series } = data.MRData;

      expect(series).toEqual('f1');
      expect(StandingsTable.season).toEqual(year.toString(), 'Wrong year retrieved');
      expect(StandingsTable.driverStandings).toEqual('1');
      expect(StandingsTable.StandingsList.length).toEqual(1);

      const driver = StandingsTable.StandingsList[0].DriverStandings[0];

      expect(driver.position).toEqual('1');
      expect(driver.points).toEqual('98');
      expect(driver.Driver.driverId).toEqual('hamilton');
    });

    const req = httpTestingController.expectOne(`${environment.motorRacingApiEndpoint}/${year}/driverStandings/1.json`);
    expect(req.request.method).toEqual('GET');

    req.flush(WORLD_CHAMPION);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
