import React, { useContext } from 'react';
import { DailyIntake } from '../../contexts';
import {
  Container,
} from './style';

/*
const DisplayObj = (result) => {
  // should be a list of common & branded objects, may also have a third type of object in there
  // depends what gets returned on full fetch from actual API not just instant search
  console.log(result);
  return (
    <div>test</div>
  );
};
*/

const DailyDisplay = () => {
  const { dayFood/* , dispatch */ } = useContext(DailyIntake);
  console.log('dayfood', dayFood);
  // this should spit out an empty array, from which we can render the day's intake.
  // will need to be able to remove or multiply from this menu too.
  return (
    <Container />
  );
};

export default DailyDisplay;
