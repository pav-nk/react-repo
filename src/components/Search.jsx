import React, { useEffect, useRef, useState } from "react";

function Search({ fetchCards }) {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleSubmit = (evt) => {
    if (evt.keyCode !== 13 && evt.keyCode) {
      return;
    }
    fetchCards(search, type);
    inputRef.current.focus();
  };

  const handleTypeChange = (evt) => {
    const { value } = evt.target;
    setType(value);
    fetchCards(search, value);
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
    setType("all");
  }, []);

  return (
    <>
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="search"
            ref={inputRef}
            type="search"
            value={search}
            onKeyDown={handleSubmit}
            onChange={(evt) => setSearch(evt.target.value)}
          />
          <button className="btn search-btn" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
      <div className="row">
        <form action="#" className="filter">
          <label>
            <input
              name="filter"
              className="with-gap"
              type="radio"
              value="all"
              checked={type === "all"}
              onChange={handleTypeChange}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="filter"
              className="with-gap"
              type="radio"
              value="movie"
              checked={type === "movie"}
              onChange={handleTypeChange}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name="filter"
              className="with-gap"
              type="radio"
              value="series"
              checked={type === "series"}
              onChange={handleTypeChange}
            />
            <span>Series</span>
          </label>
        </form>
      </div>
    </>
  );
}

export default Search;
