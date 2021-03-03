import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MacrosContainer = styled.div`
  border: 2px solid black;
  display: grid;
  grid-template-rows: minmax(50px, 1em);
  grid-template-columns: repeat(4,minmax(50px, 7em));
`;

export const Macros = styled.p`
  font-weight: bold;
  font-size: 14px;
  justify-self: center;
  align-self: center;
`;

export const FoodContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

export const Button = styled.button``;

export const FoodItemContainer = styled.div`
  border: 2px solid black;
  border-radius: 2%;
  display: grid;
  grid-template-columns: 
    minmax(2em, 3em)
    minmax(5em, 7em)
    minmax(120px, 445px)
    minmax(40px, 100px);
`;
export const Image = styled.img`
  justify-self: center;
  align-self: center;
  max-width: 4em;
  height: auto;
`;

export const ItemName = styled.p``;
