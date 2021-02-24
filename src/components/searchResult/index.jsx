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
} from './style';

const SearchResult = ({
  // required
  isBranded,
  food_name: foodName,
  photo,
  // locale,

  // branded only, optional
  brand_name: brandName = null,
  // brand_name_item_name: brandNameItemName,
  // brand_type: brandType,
  nf_calories: calories = null,
  // nix_brand_id: nixBrandID,
  // nix_item_id: nixItemID,
  // region,
  serving_qty: qty = null,
  serving_unit: unit = null,

  // common only, optional
  // common_type: commonType,
  // tag_id: tagID,
  // tag_name: tagName,
}) => (
  <Container>
    <Image>{photo.thumb}</Image>

    {isBranded ? (
      <>
        <BrandedName>{foodName}</BrandedName>
        <BrandedUnits>
          {brandName}
          {', '}
          {qty}
          {' '}
          {unit}
        </BrandedUnits>
        <CaloriesContainer>
          <Calories>{calories}</Calories>
          <CaloriesRest>cal</CaloriesRest>
        </CaloriesContainer>
      </>
    ) : <CommonName>{foodName}</CommonName>}
  </Container>
);

SearchResult.propTypes = {
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
  /*
  common_type: PropTypes.string,
  tag_id: PropTypes.string,
  tag_name: PropTypes.string,
  */

  // Common & branded
  isBranded: PropTypes.bool.isRequired,
  food_name: PropTypes.string.isRequired,
  // locale: PropTypes.string,
  photo: PropTypes.exact({
    thumb: PropTypes.string.isRequired,
  }).isRequired,
};

SearchResult.defaultProps = {
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
};
