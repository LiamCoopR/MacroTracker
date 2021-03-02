import React /* , { useState, useReducer } */ from 'react';
import dotenv from 'dotenv';
import {
  SearchBar,
} from './components';
import { Store } from './contexts';

dotenv.config();

function App() {
  return (
    <Store>
      <SearchBar />
    </Store>
  );
}

export default App;
