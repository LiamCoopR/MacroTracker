import React, { useState, useEffect } from 'react';
import {
  Container,
  Label,
  Input,
  Button,
  SearchDropdown,
  ButtonDropdown,
} from './style';
import SearchResults from '../searchResults';

// livesearch should fetch after second letter,
// capturing n results and storing in state.
// filter down onchange, no refetch unless no results.

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState({ branded: [], common: [] });
  const [showButtonDropdown, setShowButtonDropdown] = useState(false);
  // can only be one of ['all', 'common', 'branded']
  const [searchState, setSearchState] = useState('all');

  const header = new Headers();
  header.append('x-app-id', process.env.REACT_APP_APPID);
  header.append('x-app-key', process.env.REACT_APP_NUTRITIONIX_KEY);

  // fetch returns object with 2 subarrays
  useEffect(() => {
    const conductSearch = () => {
      fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${search}`, { headers: header })
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setResults(data);
        });
    };
    // determine when we should actually search?
    if (search !== '') { conductSearch(); }
    if (results !== {}) console.log(results);
  }, [search]);

  return (
    <>
      <Container>
        <SearchDropdown>
          <Label>
            <Input
              type="text"
              value={search}
              id="search-input"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <i className="fa fa-search" />
          </Label>
          { results !== { branded: [], common: [] } ? (
            <SearchResults
              branded={results.branded}
              common={results.common}
            />
          ) : null }
        </SearchDropdown>
        <ButtonDropdown>
          <Button
            onClick={() => setShowButtonDropdown(!showButtonDropdown)}
          >
            {searchState}
          </Button>
          {showButtonDropdown ? (
            <>
              <Button
                onClick={() => {
                  setSearchState('all');
                  setShowButtonDropdown(!showButtonDropdown);
                }}
              >
                all
              </Button>
              <Button
                onClick={() => {
                  setSearchState('common');
                  setShowButtonDropdown(!showButtonDropdown);
                }}
              >
                common
              </Button>
              <Button
                onClick={() => {
                  setSearchState('branded');
                  setShowButtonDropdown(!showButtonDropdown);
                }}
              >
                branded
              </Button>
            </>
          ) : null}
        </ButtonDropdown>
      </Container>
    </>
  );
};

export default SearchBar;
