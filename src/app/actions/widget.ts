import { Action } from '@ngrx/store';
import { Widget } from '../models/widget';

export const LOAD =             '[Widget] Load';
export const SELECT =           '[Widget] Select';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Widget) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;
  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = | LoadAction
    | SelectAction;
