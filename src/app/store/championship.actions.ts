import { createAction, props } from '@ngrx/store';
import { IApiResponse } from '../models/api-response';

export const load = createAction('[Championship] Load', props<{ year: number }>());
export const loadResults = createAction('[Championship] Load results', props<{ payload: IApiResponse }>());
export const loadChampion = createAction('[Championship] Load world champion', props<{ payload: IApiResponse }>());
