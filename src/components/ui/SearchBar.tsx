'use client'
// src/components/SearchBar.tsx
import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className=" border-4 border-headline rounded-lg p-2 bg-tertiary text-highlight  text-lg  sm:w-full sm:p-5 w-3/4  my-3"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie, actor ..."
      />
      <button type="submit" className='m-3'>Search</button>
    </form>
  );
};

export default SearchBar;