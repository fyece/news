import React, { useEffect } from 'react';
import { fetchUsers } from './store/user/user.actions';
import { useAppDispatch, useAppSelector } from './utils/hooks/redux';
import { articleApi } from './services/article.service';
import ArticleList from './components/layout/ArticlesList/ArticleList';

function App() {
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // )
  return (
    <div className="App">
      {/* {isLoading && <p>LOADING...</p>}
      {users.length > 0 && JSON.stringify(users, null, 4)}
      {error && <p>{error}</p>} */}
      <ArticleList />
    </div>
  );
}

export default App;
