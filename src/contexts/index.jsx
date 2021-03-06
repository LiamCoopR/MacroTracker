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
  console.log(action.type, action.payload);
  switch (action.type) {
    case 'add-item':
      return { ...state, dayFood: [...state.dayFood, action.payload] };
    case 'remove-item':
      return {
        ...state,
        dayFood: [...state.dayFood.filter((obj, idx) => idx !== action.payload)],
      };
    default:
      return state;
  }
}

export { ReducerContext, reducer, initialState };
