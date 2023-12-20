'use client';
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
    <form onSubmit={handleSubmit} className="flex items-center justify-center ">
      <input
        className="border-2 border-headline rounded-lg p-2 bg-tertiary text-highlight text-lg sm:p-1 w-3/4 lg:w-1/2 my-3"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search ..."
      />
      <button type="submit" className="btn btn-primary m-3 border border-base-200">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
