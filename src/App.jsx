import React, { useReducer } from 'react';
import dotenv from 'dotenv';
import {
  SearchBar,
} from './components';
import { ReducerContext, initialState, reducer } from './contexts';

dotenv.config();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <SearchBar />
    </ReducerContext.Provider>
  );
}

export default App;
