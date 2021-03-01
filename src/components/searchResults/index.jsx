import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import {
  Container,
  Header,
} from './style';
import Result from '../result';

const SearchResults = ({ branded, common, searchState }) => {
  const len = searchState === 'all' ? 5 : 10;
  // console.log(common[0]);
  return (
    <Container>
      {searchState !== 'common'
        ? (
          <>
            <Header>Branded</Header>
            {branded.slice(0, len > branded.length ? branded.length : len).map((obj) => (
              <Result key={obj.nix_brand_id + obj.nix_item_id} result={obj} />
            ))}
          </>
        ) : null}
      {searchState !== 'branded'
        ? (
          <>
            <Header>Common</Header>
            {common.slice(0, len > common.length ? common.length : len).map((obj) => (
              <Result key={obj.food_name + obj.tag_id} result={obj} />))}
          </>
        ) : null }
    </Container>
  );
};

SearchResults.propTypes = {
  searchState: PropTypes.string.isRequired,
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
    common_type: PropTypes.number,
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
