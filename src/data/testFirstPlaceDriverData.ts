export const WORLD_CHAMPION = {
  MRData: {
    xmlns: 'http://ergast.com/mrd/1.4',
    series: 'f1',
    url: 'http://ergast.com/api/f1/2008/driverstandings/1.json',
    limit: '30',
    offset: '0',
    total: '1',
    StandingsTable: {
      season: '2008',
      driverStandings: '1',
      StandingsLists: [
        {
          season: '2008',
          round: '18',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '98',
              wins: '5',
              Driver: {
                driverId: 'hamilton',
                permanentNumber: '44',
                code: 'HAM',
                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                givenName: 'Lewis',
                familyName: 'Hamilton',
                dateOfBirth: '1985-01-07',
                nationality: 'British'
              },
              Constructors: [
                {
                  constructorId: 'mclaren',
                  url: 'http://en.wikipedia.org/wiki/McLaren',
                  name: 'McLaren',
                  nationality: 'British'
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
