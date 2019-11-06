import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as championshipReducer from './championship.reducer';

export interface State {
  championship: championshipReducer.IState;
}

export const reducers: ActionReducerMap<State> = {
  championship: championshipReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
