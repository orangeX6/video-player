import React, { useState } from 'react';

const SearchBar = ({ onTermSearch }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSearch(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            placeholder="Search YT"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
