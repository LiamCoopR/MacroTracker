import React, { useContext } from 'react';
import {
  Container,
} from './style';
import { ReducerContext } from '../../contexts';

const DisplayObj = (obj) => {
  console.log(obj);
  return <h1>test</h1>;
};

const DailyDisplay = () => {
  const { dayFood } = useContext(ReducerContext);
  return (
    <Container>
      {dayFood.map((obj) => <DisplayObj obj={obj} />)}
    </Container>
  );
};

export default DailyDisplay;
