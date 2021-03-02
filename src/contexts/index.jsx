import React, { createContext, useReducer } from 'react';

// https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf
const initialState = { dayFood: [] };
const ReducerContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'add-item':
      return [...state.dayFood, action.payload];
    /* case 'remove-item':
      return state.dayFood; */
    default:
      return state.dayFood;
  }
}

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ReducerContext.Provider value={[state, dispatch]}>
      {children}
    </ReducerContext.Provider>
  );
};

export { Store, ReducerContext };
