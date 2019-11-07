import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { State } from '../../store';

import { IRace } from '../../models/race';
import { IDriverStanding } from '../../models/driver-standing';
import * as championshipActions from '../../store/championship.actions';
import * as championshipSelectors from '../../store/championship.selectors';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<any> = new Subject<any>();

  loading$: Observable<boolean> = this.store.pipe(
    select(championshipSelectors.selectChampionshipLoading),
    takeUntil(this.unsubscribe$)
  );

  races$: Observable<IRace[]> = this.store.pipe(
    select(championshipSelectors.selectChampionshipRaces),
    takeUntil(this.unsubscribe$)
  );

  champion$: Observable<IDriverStanding> = this.store.pipe(
    select(championshipSelectors.selectChampionshipChampion),
    takeUntil(this.unsubscribe$)
  );

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit() {
    const year = parseInt(this.route.snapshot.paramMap.get('year'), 10);
    this.store.dispatch(championshipActions.load({ year }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    this.store.dispatch(championshipActions.clear());
  }
}
