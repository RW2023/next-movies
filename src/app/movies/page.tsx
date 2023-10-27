/* eslint-disable @next/next/no-img-element */
// src/app/movies/page.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from '../../components/SearchBar';

interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<MovieItem[]>([]); // Ensure initial state is an empty array

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `/api/movies?s=${encodeURIComponent(query)}`,
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        console.error('Unexpected API response:', data);
      }
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {movies.map(
          (
            movie, // Corrected 'movies' to 'movie'
          ) => (
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
          ),
        )}
      </ul>
    </div>
  );
};

export default MoviesPage;