import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Issue from './pages/Issue';
import Search from './pages/Search';
import useBookmarkStore from './store/useBookmarkStore';
import { getBookmarks } from './utils';

const App = () => {
  const { setUserBookmarks } = useBookmarkStore();
  useEffect(() => {
    setUserBookmarks(getBookmarks());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/issues" element={<Issue />} />
    </Routes>
  );
};

export default App;
