import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Search } from "semantic-ui-react";

const SearchBar = () => {
  const history = useHistory();
  const onSearchRoute = useRouteMatch({ path: '/search' });
  const [searchTerms, setSearchTerms] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (onSearchRoute) {
        history.replace(`/search?q=${searchTerms}`);
    } else {
        history.push(`/search?q=${searchTerms}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Search
        class="search"
        showNoResults={false}
        onSearchChange={(e, { value }) => setSearchTerms(value)}
      />
    </form>
  );
};

export default SearchBar;
