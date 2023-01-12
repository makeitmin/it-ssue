import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Issue from './pages/Issue';
import Search from './pages/Search';
import useBookmarkStore from './store/useBookmarkStore';
import { getBookmarks } from './utils';

/* 라우팅 */
const App = () => {
  /* 북마크 배열 변수 (전역) */
  const { setUserBookmarks } = useBookmarkStore();

  useEffect(() => {
    /* 북마크 목록 가져오기 */
    setUserBookmarks(getBookmarks());
  }, []);

  return (
    <Routes>
      <Route path="/it-ssue" element={<Search />} />
      <Route path="/issues" element={<Issue />} />
    </Routes>
  );
};

export default App;
