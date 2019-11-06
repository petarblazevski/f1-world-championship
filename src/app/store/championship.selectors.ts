import { createSelector } from '@ngrx/store';
import { State } from './index';
import { IState } from './championship.reducer';

export const selectChampionshipFeature = (state: State) => state.championship;

export const selectChampionshipRaces = createSelector(
  selectChampionshipFeature,
  (state: IState) => state.races
);

export const selectChampionshipChampion = createSelector(
  selectChampionshipFeature,
  (state: IState) => state.champion
);
