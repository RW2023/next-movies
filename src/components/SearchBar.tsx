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
        className="border-4 border-gray-600 rounded-lg p-2 bg-headline text-black w-full"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie, actor or show..."
      />
      <button type="submit" className='m-3'>Search</button>
    </form>
  );
};

export default SearchBar;
