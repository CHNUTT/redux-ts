// ! Doesn't work
// const RepositoryTypes = {
//   SEARCH_REPOSITORIES_START: 'SEARCH_REPOSITORIES_START',
//   SEARCH_REPOSITORIES_SUCCESS: 'SEARCH_REPOSITORIES_SUCCESS',
//   SEARCH_REPOSITORIES_FAILED: 'SEARCH_REPOSITORIES_FAILED',
// };

// ! Use enum instead
// export const SEARCH_REPOSITORIES_START = 'SEARCH_REPOSITORIES_START';
// export const SEARCH_REPOSITORIES_SUCCESS = 'SEARCH_REPOSITORIES_SUCCESS';
// export const SEARCH_REPOSITORIES_FAILED = 'SEARCH_REPOSITORIES_FAILED';

import repositoryActionNames from '../action-types';

interface SearchRepositoriesStartAction {
  type: repositoryActionNames.SEARCH_REPOSITORIES_START;
}

interface SearchRepositoriesSuccessAction {
  type: repositoryActionNames.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesFailAction {
  type: repositoryActionNames.SEARCH_REPOSITORIES_FAILED;
  payload: string;
}

type RepositoryInterfaces =
  | SearchRepositoriesStartAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesFailAction;

export default RepositoryInterfaces;
