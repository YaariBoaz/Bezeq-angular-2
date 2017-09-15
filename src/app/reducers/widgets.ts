import { createSelector } from 'reselect';
import { Widget } from '../models/widget';
import * as widget from '../actions/widget';
import * as dashboard from '../actions/dashboard';


export interface State {
  ids: string[];
  entities: { [id: string]: Widget };
  selectedWidgetId: string | null;
};

export const initialState: State = {
  ids: [],
  entities: {},
  selectedWidgetId: null,
};

export function reducer(state = initialState, action: widget.Actions | collection.Actions): State {
  switch (action.type) {
    case dashboard.LOAD_SUCCESS: {
      const widgets = action.payload;
      const newWidgets = widgets.filter(widget => !state.entities[widget.id]);

      const newBookIds = newWidgets.map(book => book.id);
      const newBookEntities = newWidgets.reduce((entities: { [id: string]: Book }, book: Book) => {
        return Object.assign(entities, {
          [book.id]: book
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newBookIds ],
        entities: Object.assign({}, state.entities, newBookEntities),
        selectedWidgetId: state.selectedWidgetId
      };
    }

    case widget.LOAD: {
      const book = action.payload;

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, book.id ],
        entities: Object.assign({}, state.entities, {
          [book.id]: book
        }),
        selectedWidgetId: state.selectedWidgetId
      };
    }

    case widget.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedWidgetId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedWidgetId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
