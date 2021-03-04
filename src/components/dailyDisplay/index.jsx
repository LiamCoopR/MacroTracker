import React, { useContext } from 'react';
import {
  Button,
  Container,
  MacrosContainer,
  Macros,
  FoodContainer,
  Image,
  FoodItemContainer,
  ItemName,
} from './style';
import { ReducerContext } from '../../contexts';

const DailyDisplay = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const { dayFood, macros } = state;
  // need to check if common branded, what to display.
  // when refetch, currentquicksearch object.
  return (
    <Container>
      <MacrosContainer>
        <Macros>
          Cals:
          {' '}
          {macros.calories}
        </Macros>
        <Macros>
          Protein:
          {' '}
          {macros.protein}
        </Macros>
        <Macros>
          Fat:
          {' '}
          {macros.fat}
        </Macros>
        <Macros>
          Carbs:
          {' '}
          {macros.carbs}
        </Macros>
      </MacrosContainer>
      <FoodContainer>
        {dayFood.map((obj, idx) => (
          <FoodItemContainer>
            <Button onClick={() => dispatch({ type: 'remove-item', payload: idx })} />
            <Image src={obj.photo.thumb} />
            <ItemName>{obj.food_name}</ItemName>
          </FoodItemContainer>
        ))}
      </FoodContainer>
    </Container>
  );
};

export default DailyDisplay;
