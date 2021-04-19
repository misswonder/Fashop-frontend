import React from "react";
import { useLocation } from "react-router-dom";
import MainContainer from "../Containers/MainContainer";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return (
    <>
      <br></br>
      <h2>Search results for "{query.get("q")}"</h2>
      <MainContainer searchTerms={query.get("q")} />
    </>
  );
};

export default Search;
