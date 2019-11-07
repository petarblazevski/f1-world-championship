import { Action, createReducer, on } from '@ngrx/store';

import * as championshipActions from './championship.actions';
import { IRace } from '../models/race';
import { IDriverStanding } from '../models/driver-standing';

export interface IState {
  loading: boolean;
  races: IRace[];
  champion: IDriverStanding;
}

export const initialState: IState = {
  loading: false,
  races: null,
  champion: null
};

const championshipReducer = createReducer(
  initialState,
  on(championshipActions.load, state => ({ ...state, loading: true })),
  on(championshipActions.loadComplete, state => ({ ...state, loading: false })),
  on(championshipActions.loadResults, (state, { payload }) => ({
    ...state,
    races: payload.MRData.RaceTable.Races
  })),
  on(championshipActions.loadChampion, (state, { payload }) => ({
    ...state,
    champion: payload.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
  })),
  on(championshipActions.clear, state => ({ ...state, races: null, champion: null }))
);

export function reducer(state: IState | undefined, action: Action) {
  return championshipReducer(state, action);
}
