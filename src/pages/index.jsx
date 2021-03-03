import React, { useReducer } from 'react';
import {
  SearchBar,
  DailyDisplay,
} from '../components';
import { ReducerContext, initialState, reducer } from '../contexts';
import { Container } from './style';

const Page = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <ReducerContext.Provider value={{ state, dispatch }}>
        <SearchBar />
        <DailyDisplay />
      </ReducerContext.Provider>
    </Container>
  );
};

export default Page;
