import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const DailyIntake = createContext({ dayFood: [] });
const { Provider } = DailyIntake;

const StateProvider = ({ children }) => {
  const [{ dayFood }, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add-item':
        return { dayFood: [...dayFood, action.obj] };
      case 'remove-item':
        return { dayFood: [...dayFood] };
      default:
        return state;
    }
  }, { dayFood: [] });

  return <Provider value={{ dayFood, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export { DailyIntake, StateProvider };
