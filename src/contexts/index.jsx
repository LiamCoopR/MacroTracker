import { createContext } from 'react';

// https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf
const initialState = {
  dayFood: [],
  macros: {
    calories: 0, protein: 0, fat: 0, carbs: 0,
  },
};

const ReducerContext = createContext(initialState);

function reducer(state, action) {
  console.log(state.dayFood);
  switch (action.type) {
    case 'add-item':
      return { dayFood: [...state.dayFood, action.payload], macros: state.macros };
    // figure out how we're indexing / keying the objects
    /* case 'remove-item':
      return { dayFood: [...state.dayFood.map(() =>())] }; */
    default:
      return state;
  }
}

export { ReducerContext, reducer, initialState };
