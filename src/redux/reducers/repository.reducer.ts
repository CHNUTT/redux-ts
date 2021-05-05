import RepositoryActionTypes, {
  SEARCH_REPOSITORIES_START,
  SEARCH_REPOSITORIES_SUCCESS,
  SEARCH_REPOSITORIES_FAILED,
} from './repositoryActionTypes';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: RepositoryActionTypes
): RepositoriesState => {
  switch (action.type) {
    case SEARCH_REPOSITORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case SEARCH_REPOSITORIES_FAILED:
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
