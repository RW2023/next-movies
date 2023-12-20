// src/pages/movies/[id].tsx
'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Define a TypeScript interface for the movie details
interface MovieDetails {
  Title: string;
  Year: string;
  Plot: string;
  Director: string;
  Actors: string;
  Genre: string;
  Runtime: string;
  // Add other relevant fields based on the API response
}

const MovieDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetch(`/api/movies?id=${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch movie details.');
          }
          return response.json();
        })
        .then((data) => setMovie(data))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>No movie details available.</div>;
  }

  // Render the movie details
  return (
    <div>
      <h1>
        {movie.Title} ({movie.Year})
      </h1>
      <p>{movie.Plot}</p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.Runtime}
      </p>
      {/* Render other movie details as needed */}
    </div>
  );
};

export default MovieDetailsPage;
