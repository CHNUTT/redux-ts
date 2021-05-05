import RepositoryActionInterfaces from './repository.types';
import RepositoryActionTypes from './repository.enum';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: RepositoryActionInterfaces
): RepositoriesState => {
  switch (action.type) {
    case RepositoryActionTypes.SEARCH_REPOSITORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case RepositoryActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case RepositoryActionTypes.SEARCH_REPOSITORIES_FAILED:
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
