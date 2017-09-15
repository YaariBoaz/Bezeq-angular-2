import * as dashboard from '../actions/dashboard';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(state = initialState, action: dashboard.Actions): State {
  switch (action.type) {
    case dashboard.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case dashboard.LOAD_SUCCESS: {
      const widgets = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: widgets.map(book => book.id)
      };
    }

    case dashboard.ADD_WIDGET_SUCCESS:
    case dashboard.REMOVE_WIDGET_FAIL: {
      const book = action.payload;

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, book.id ]
      });
    }

    case dashboard.REMOVE_WIDGET_SUCCESS:
    case dashboard.ADD_WIDGET_FAIL: {
      const book = action.payload;
      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== book.id)
      });
    }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
