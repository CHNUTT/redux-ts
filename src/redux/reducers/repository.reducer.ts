import { ActionInterfaces } from '../actions-interface';
import { ActionTypes } from '../action-types';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: ActionInterfaces
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionTypes.SEARCH_REPOSITORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
