import React, { useState, useEffect } from 'react';
import {
  Container,
  Label,
  Input,
  DisplayResults,
} from './style';

// livesearch should fetch after second letter,
// capturing n results and storing in state.
// filter down onchange, no refetch unless no results.

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const header = new Headers();
  header.append('x-app-id', process.env.REACT_APP_APPID);
  header.append('x-app-key', process.env.REACT_APP_NUTRITIONIX_KEY);

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
    // if results array is empty, fetch
    if ((results.common.length + results.branded.length) <= 3) conductSearch();
    // search has changed, filter down results
    setResults(results.filter((obj) => obj.food_name.toLowerCase.includes(search)));
  }, [search]);

  return (
    <>
      <Container>
        <Label>
          <Input
            type="text"
            value={search}
            id="search-input"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value.toLowerCase)}
          />
          <i className="fa fa-search" />
        </Label>
      </Container>
      {results.length > 0 ? <DisplayResults results={results} /> : null}
    </>
  );
};

export default SearchBar;
