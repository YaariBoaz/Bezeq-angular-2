import { Action } from '@ngrx/store';
import { Widget } from '../models/widget';


export const ADD_Widget =             '[Dashboard] Add Widget';
export const ADD_WIDGET_SUCCESS =     '[Dashboard] Add Widget Success';
export const ADD_WIDGET_FAIL =        '[Dashboard] Add Widget Fail';
export const REMOVE_WIDGET =          '[Dashboard] Remove Widget';
export const REMOVE_WIDGET_SUCCESS =  '[Dashboard] Remove Widget Success';
export const REMOVE_WIDGET_FAIL =     '[Dashboard] Remove Widget Fail';
export const LOAD =                 '[Dashboard] Load';
export const LOAD_SUCCESS =         '[Dashboard] Load Success';
export const LOAD_FAIL =            '[Dashboard] Load Fail';


/**
 * Add WIDGET to Collection Actions
 */
export class AddWidgetAction implements Action {
  readonly type = ADD_Widget;

  constructor(public payload: Widget) { }
}

export class AddWidgetSuccessAction implements Action {
  readonly type = ADD_WIDGET_SUCCESS;

  constructor(public payload: Widget) { }
}

export class AddWidgetFailAction implements Action {
  readonly type = ADD_WIDGET_FAIL;

  constructor(public payload: Widget) { }
}


/**
 * Remove Widget from Collection Actions
 */
export class RemoveWidgetAction implements Action {
  readonly type = REMOVE_WIDGET;

  constructor(public payload: Widget) { }
}

export class RemoveWidgetSuccessAction implements Action {
  readonly type = REMOVE_WIDGET_SUCCESS;

  constructor(public payload: Widget) { }
}

export class RemoveWidgetFailAction implements Action {
  readonly type = REMOVE_WIDGET_FAIL;

  constructor(public payload: Widget) {}
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
  constructor(public payload: Widget[]) { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Widget[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddWidgetAction
  | AddWidgetSuccessAction
  | AddWidgetFailAction
  | RemoveWidgetAction
  | RemoveWidgetSuccessAction
  | RemoveWidgetFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
