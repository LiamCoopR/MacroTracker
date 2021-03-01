import React from 'react';
import dotenv from 'dotenv';
import {
  SearchBar,
  DailyDisplay,
} from './components';
import Store from './contexts';

dotenv.config();

function App() {
  return (
    <Store>
      <SearchBar />
      <DailyDisplay />
    </Store>
  );
}

export default App;
