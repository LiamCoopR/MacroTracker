import React from 'react';
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

// needs either common or branded object (common, or branded represents an array)
const Result = ({ result }) => (
  <Container>
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
          <Calories>{result.nf_calories}</Calories>
          <CaloriesRest>cal</CaloriesRest>
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

Result.propTypes = {
  result: PropTypes.shape({
    // Branded Only
    brand_name: PropTypes.string,
    // brand_name_item_name: PropTypes.string,
    // brand_type: PropTypes.string,
    nf_calories: PropTypes.number,
    // nix_brand_id: PropTypes.string,
    // nix_item_id: PropTypes.string,
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
    }).isRequired,
  }).isRequired,
};

/*
Result.defaultProps = {
  result: {
    brand_name: null,
    // brand_name_item_name: null,
    // brand_type: null,
    nf_calories: null,
    // nix_brand_id: null,
    // nix_item_id: null,
    // region: null,
    serving_qty: null,
    serving_unit: null,
  // common_type: null,
  // tag_id: null,
  // tag_name: null,
  // locale: null,
  },
};
*/

export default Result;
