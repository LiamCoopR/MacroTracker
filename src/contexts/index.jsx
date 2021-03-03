import { createContext } from 'react';

// https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf
const initialState = { dayFood: [] };

const ReducerContext = createContext(initialState);

function reducer(state, action) {
  console.log(state.dayFood);
  switch (action.type) {
    case 'add-item':
      return { dayFood: [...state.dayFood, action.payload] };
    /* case 'remove-item':
      return state.dayFood; */
    default:
      return state;
  }
}

export { ReducerContext, reducer, initialState };
