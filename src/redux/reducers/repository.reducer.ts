import RepositoryTypes from './repository.types';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    case RepositoryTypes.SEARCH_REPOSITORIES:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case RepositoryTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case RepositoryTypes.SEARCH_REPOSITORIES_FAIL:
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
