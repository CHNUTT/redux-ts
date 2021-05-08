import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RpositoryList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    searchRepositories(term);
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
