import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux';

const RpositoryList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RpositoryList;
