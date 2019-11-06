import { Action, createReducer, on } from '@ngrx/store';

import * as championshipActions from './championship.actions';
import { IRace } from '../models/race';
import { IDriverStanding } from '../models/driver-standing';

export interface IState {
  races: IRace[];
  champion: IDriverStanding;
}

export const initialState: IState = {
  races: null,
  champion: null
};

const championshipReducer = createReducer(
  initialState,
  on(championshipActions.loadResults, (state, { payload }) => ({
    ...state,
    races: payload.MRData.RaceTable.Races
  })),
  on(championshipActions.loadChampion, (state, { payload }) => ({
    ...state,
    champion: payload.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
  }))
);

export function reducer(state: IState | undefined, action: Action) {
  return championshipReducer(state, action);
}
