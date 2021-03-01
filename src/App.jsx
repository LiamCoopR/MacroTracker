import React from 'react';
import dotenv from 'dotenv';
import {
  SearchBar,
  DailyDisplay,
} from './components';
import { StateProvider } from './contexts';

dotenv.config();

function App() {
  return (
    <StateProvider>
      <SearchBar />
      <DailyDisplay />
    </StateProvider>
  );
}

export default App;
