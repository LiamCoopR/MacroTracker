import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Image,
  CommonName,
  BrandedName,
  CaloriesContainer,
  Calories,
  CaloriesRest,
  BrandedUnits,
  BrandContainer,
} from './style';
import { ReducerContext } from '../../contexts';

/*
function getItem(item) {
  const header = new Headers();
  header.append('Content-Type', 'application/json');
  header.append('x-app-id', process.env.REACT_APP_APPID);
  header.append('x-app-key', process.env.REACT_APP_NUTRITIONIX_KEY);

  const queryTerm = 'nix_item_id' in item ? item.food_name : item.nix_item_id;

  return fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    mode: 'cors',
    headers: header,
    body: JSON.stringify({ query: queryTerm }),
  })
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    });
}
*/

// needs either common or branded object (common, or branded represents an array)
// what happens if it's neither? haven't looked at what "normal"
// (read: not instant search) API call returns.
const Result = ({ result }) => {
  const { dispatch } = useContext(ReducerContext);

  function getItem(item) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('x-app-id', process.env.REACT_APP_APPID);
    header.append('x-app-key', process.env.REACT_APP_NUTRITIONIX_KEY);

    const queryTerm = 'nix_item_id' in item ? item.food_name : item.nix_item_id;

    return fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      method: 'POST',
      mode: 'cors',
      headers: header,
      body: JSON.stringify({ query: queryTerm }),
    })
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((obj) => dispatch({ type: 'add-item', payload: obj }));
  }

  return (
    <Container onClick={() => getItem(result)}>
      <Image alt="pic" src={result.photo.thumb} />
      {'brand_name' in result ? (
        <>
          <BrandContainer>
            <BrandedName>{result.food_name}</BrandedName>
            <BrandedUnits>
              {result.brand_name}
              {', '}
              {result.serving_qty}
              {' '}
              {result.serving_unit}
            </BrandedUnits>
          </BrandContainer>
          <CaloriesContainer>
            <Calories>{Math.floor(result.nf_calories)}</Calories>
            <CaloriesRest>cals</CaloriesRest>
          </CaloriesContainer>
        </>
      ) : (
        <BrandContainer>
          <CommonName>{result.food_name}</CommonName>
          {' '}
        </BrandContainer>
      )}
    </Container>
  );
};

Result.propTypes = {
  result: PropTypes.shape({
    // Branded Only
    brand_name: PropTypes.string,
    // brand_name_item_name: PropTypes.string,
    // brand_type: PropTypes.string,
    nf_calories: PropTypes.number,
    // nix_brand_id: PropTypes.string,
    nix_item_id: PropTypes.string,
    // region: PropTypes.number,
    serving_qty: PropTypes.number,
    serving_unit: PropTypes.string,

    // Common Only
    common_type: PropTypes.string,
    tag_id: PropTypes.string,
    tag_name: PropTypes.string,

    // Common & branded
    food_name: PropTypes.string.isRequired,
    // locale: PropTypes.string,
    photo: PropTypes.exact({
      thumb: PropTypes.string.isRequired,
      highres: PropTypes.string,
      is_user_uploaded: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default Result;
