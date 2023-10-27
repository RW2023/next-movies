/* eslint-disable @next/next/no-img-element */
// src/pages/movies.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar'; // Import your SearchBar component

interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<MovieItem[]>([]);

  const handleSearch = async (query: string) => {
    const response = await fetch(
      `http://localhost:3000/api/movies?s=${encodeURIComponent(query)}`,
    );
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <SearchBar onSearch={handleSearch} /> {/* Use your SearchBar component */}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link href={`/movies/${movie.imdbID}`}>
              <a>
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} Poster`}
                  width={100}
                />
                {movie.Title} ({movie.Year})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
