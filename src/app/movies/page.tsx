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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie List</h1>
      <SearchBar onSearch={handleSearch} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="bg-white p-4 rounded shadow">
            <Link href={`/movies/${movie.imdbID}`}>
              <div className="block">
                {movie.image ? (
                  <img
                    src={movie.image.url}
                    alt={`${movie.title} Poster`}
                    className="w-full h-48 object-cover mb-2 rounded"
                  />
                ) : (
                  <div className="w-full h-48 mb-2 bg-gray-200 flex items-center justify-center rounded">
                    No image available
                  </div>
                )}
                <h2 className="text-lg font-semibold">
                  {movie.title} ({movie.year})
                </h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;