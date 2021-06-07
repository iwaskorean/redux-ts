import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
// to custom hooks useActions

// import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();

  // const { data, error, loading } = useSelector((state) => state.repositories);
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
    // dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
