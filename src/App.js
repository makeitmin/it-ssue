import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Search from './pages/Search';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
};

export default App;
