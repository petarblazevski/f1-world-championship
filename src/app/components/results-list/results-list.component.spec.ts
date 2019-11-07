import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';
import { IsWorldChampionPipe } from '../../pipes/is-world-champion.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RESULTS_DATA } from '../../../data/testResultsData';
import { IRace } from '../../models/race';
import { WORLD_CHAMPION } from '../../../data/testFirstPlaceDriverData';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;
  let racesDebugEl: DebugElement;
  let racesEl: Element;

  const mockRaces = RESULTS_DATA.MRData.RaceTable.Races;
  const mockChampion = WORLD_CHAMPION.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ResultsListComponent, IsWorldChampionPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;

    racesDebugEl = fixture.debugElement.query(By.css('.races'));
    racesEl = racesDebugEl.nativeElement;

    // Simulate the parent setting up the Input() properties
    component.races = mockRaces as IRace[];
    component.champion = mockChampion;

    // Trigger initial data binding
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of races for the season', () => {
    expect(racesEl.querySelectorAll('.race').length).toEqual(mockRaces.length);
  });

  it('should render Lewis Hamilton as first winner', () => {
    const winner = racesEl.querySelectorAll('.race')[0].querySelector('[data-testid="winner"]').textContent;
    expect(winner).toContain('Lewis Hamilton');
  });

  it('should have 5 ribbons indicating a world champion', () => {
    const ribbonCount = racesEl.querySelectorAll('.ribbon').length;
    expect(ribbonCount).toEqual(5);
  });
});
