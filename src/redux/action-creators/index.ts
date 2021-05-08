import axios from 'axios';

import Actions from '../actions';
import { ActionInterfaces } from '../actions-interface';
import { Dispatch } from 'redux';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<ActionInterfaces>) => {
    dispatch(Actions.RepositoryActions.searchRepositoriesStart());

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => result.package.name);

      dispatch(Actions.RepositoryActions.searchRepositoriesSuccess(names));
    } catch (err) {
      dispatch(Actions.RepositoryActions.searchRepositoriesFailed(err.message));
    }
  };
};
