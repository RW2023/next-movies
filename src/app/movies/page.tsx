/* eslint-disable @next/next/no-img-element */
// src/app/movies/page.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from '../../components/SearchBar';

interface MovieItem {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  image?: {
    url: string;
  };
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<MovieItem[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `/api/movies?query=${encodeURIComponent(query)}`,
      );
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
      } else {
        console.error('Unexpected API response:', data);
      }
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  return (
    <div className='container flex flex-col justify-center' >
      <h1>Movie List</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link href={`/movies/${movie.imdbID}`}>
              {movie.image ? (
                <img
                  src={movie.image.url}
                  alt={`${movie.title} Poster`}
                  width="100"
                  height="150"
                />
              ) : (
                <div>No image available</div>
              )}
              {movie.title} ({movie.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
