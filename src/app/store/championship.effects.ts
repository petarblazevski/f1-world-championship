import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../services/api.service';
import * as championshipActions from './championship.actions';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Injectable()
export class ChampionshipEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(championshipActions.load),
      switchMap(action =>
        forkJoin(this.apiService.getResultsByYear(action.year), this.apiService.getWorldChampionByYear(action.year))
      ),
      switchMap(([results, champion]) => [
        championshipActions.loadResults({ payload: results }),
        championshipActions.loadChampion({ payload: champion }),
        championshipActions.loadComplete()
      ])
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
