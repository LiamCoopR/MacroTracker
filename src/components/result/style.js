import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid black;
  border-radius: 2%;
  display: grid;
  grid-template-columns: 
    minmax(5em, 7em) 
    minmax(120px, 445px) 
    minmax( 40px, 100px);
`;

export const Image = styled.img`
  max-width: 7em;
  height: auto;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BrandedName = styled.h2`
  font-size: 16px;
`;

export const BrandedUnits = styled.p`
  font-size: 12px;
`;

export const CommonName = styled.h2`
  font-size: 16px;
`;

export const CaloriesContainer = styled.div`
  display: flex;
  flex-direction column;
  justify-content: center;
  align-items: center;
`;

export const Calories = styled.h2`
  font-size: 16px;
`;
export const CaloriesRest = styled.p`
  font-size: 14px;
`;
