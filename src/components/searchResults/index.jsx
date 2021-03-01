import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import {
  Container,
  Header,
} from './style';
import Result from '../result';

const SearchResults = ({ branded, common }, searchState) => {
  console.log(searchState);
  return (
    <Container>
      <Header>Branded</Header>
      {branded.map((obj) => (
        <Result result={obj} />
      ))}
      <Header>Common</Header>
      {common.map((obj) => (
        <Result result={obj} />
      ))}
    </Container>
  );
};

SearchResults.propTypes = {
  // searchStates: PropTypes.string.isRequired,
  branded: arrayOf(PropTypes.shape({
    brand_name: PropTypes.string,
    brand_name_item_name: PropTypes.string,
    brand_type: PropTypes.number,
    nix_brand_id: PropTypes.string,
    nix_item_id: PropTypes.string,
    region: PropTypes.number,
    serving_qty: PropTypes.number,
    serving_unit: PropTypes.string,
    food_name: PropTypes.string,
    locale: PropTypes.string,
    photo: PropTypes.shape({
      thumb: PropTypes.string,
    }),
  })),
  common: arrayOf(PropTypes.shape({
    common_type: PropTypes.string,
    tag_id: PropTypes.string,
    tag_name: PropTypes.string,
    food_name: PropTypes.string,
    locale: PropTypes.string,
    photo: PropTypes.shape({
      thumb: PropTypes.string,
    }),
  })),
};

SearchResults.defaultProps = {
  branded: {},
  common: {},
};

export default SearchResults;
