// ! Doesn't work
// const RepositoryTypes = {
//   SEARCH_REPOSITORIES_START: 'SEARCH_REPOSITORIES_START',
//   SEARCH_REPOSITORIES_SUCCESS: 'SEARCH_REPOSITORIES_SUCCESS',
//   SEARCH_REPOSITORIES_FAILED: 'SEARCH_REPOSITORIES_FAILED',
// };

export const SEARCH_REPOSITORIES_START = 'SEARCH_REPOSITORIES_START';
export const SEARCH_REPOSITORIES_SUCCESS = 'SEARCH_REPOSITORIES_SUCCESS';
export const SEARCH_REPOSITORIES_FAILED = 'SEARCH_REPOSITORIES_FAILED';

interface SearchRepositoriesStartAction {
  type: typeof SEARCH_REPOSITORIES_START;
}

interface SearchRepositoriesSuccessAction {
  type: typeof SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesFailAction {
  type: typeof SEARCH_REPOSITORIES_FAILED;
  payload: string;
}

type RepositoryActionTypes =
  | SearchRepositoriesStartAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesFailAction;

export default RepositoryActionTypes;
