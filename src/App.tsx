import { Provider } from 'react-redux';
import { store } from './redux';
import RepositoryList from './components/repository-list.component';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoryList></RepositoryList>
      </div>
    </Provider>
  );
};

export default App;
