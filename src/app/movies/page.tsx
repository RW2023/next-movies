// src/app/movies/page.tsx
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/ui/SearchBar';
import Image from 'next/image';
import Loading from '@/components/ui/Loading';
import SubHeading from '@/components/ui/SubHeading';
import Heading from '@/components/ui/Heading';

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
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <div>
      <Image src="/movie.jpg" alt="Movie" layout="fill" objectFit="cover" />

      <div className="hero-content text-center text-neutral-content">
        <div className="container mx-auto p-4 mb-4 bg-base-100 justify-center rounded-md drop-shadow-2xl glass">
          <Heading title = "flixer" iconClass='fas fa-film'/>
          <SearchBar onSearch={handleSearch} />
          {loading ? (
            <Loading />
          ) : movies.length === 0 ? (
            <div className="text-center mt-4">
              <h2 className="text-xl">
                Enter a search term to find movies and tv shows
              </h2>
              <p>Search by title, show or the featured actors</p>
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 card">
              {movies.map((movie) => (
                <li
                  key={movie.imdbID}
                  className="bg-base-300 p-4 rounded shadow justify-center font-serif"
                >
                  <Link href={`/movies/${movie.imdbID}`}>
                    <div className="block">
                      {movie.image ? (
                        <Image
                          src={movie.image.url}
                          alt={`${movie.title} Poster`}
                          width={300}
                          height={350}
                          className="object-cover mb-2 rounded drop-shadow-xl w-full h-auto"
                        />
                      ) : (
                        <div className="mb-2 flex items-center justify-center rounded bg-base-300 border-2 border-base-200 shadow-md">
                        <p>No Image Available</p>
                        </div>
                      )}
                      <div className="card-title">
                        {movie.year && (
                          <SubHeading
                            title={`${movie.title} (${movie.year})`}
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
