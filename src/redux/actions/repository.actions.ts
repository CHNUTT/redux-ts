import { ActionTypes } from '../action-types';
import { ActionInterfaces } from '../actions-interface';

const searchRepositoriesStart = (): ActionInterfaces => ({
  type: ActionTypes.SEARCH_REPOSITORIES_START,
});

const searchRepositoriesSuccess = (
  repositories: string[]
): ActionInterfaces => ({
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
  payload: repositories,
});

const searchRepositoriesFailed = (message: string): ActionInterfaces => ({
  type: ActionTypes.SEARCH_REPOSITORIES_FAILED,
  payload: message,
});

const RepositoryActions = {
  searchRepositoriesStart,
  searchRepositoriesSuccess,
  searchRepositoriesFailed,
};

export default RepositoryActions;
