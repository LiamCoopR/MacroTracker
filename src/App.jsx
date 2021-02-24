import React from 'react';
import dotenv from 'dotenv';
import SearchBar from './components/searchBar';

dotenv.config();

function App() {
  return (
    <SearchBar />
  );
}

export default App;
