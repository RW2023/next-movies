import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// Define an interface for individual movie items
interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// Define an interface for the entire API response
interface ApiResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: string;
}

// Variables to hold cache data and expiry timestamp
let cache: ApiResponse | null = null;
let cacheExpiry: number | null = null;

const handleMoviesRequest = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (cache && cacheExpiry && cacheExpiry > Date.now()) {
    // Cache is still fresh, return cached data
    return res.json(cache);
  }

  try {
    // Fetch data from the external API
    const response = await axios.get(
      'https://movie-database-alternative.p.rapidapi.com/',
      {
        params: { s: 'Avengers Endgame', r: 'json', page: '1' },
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string, // Use environment variable for API key
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        },
      },
    );
    cache = response.data; // Update cache
    cacheExpiry = Date.now() + 3600000; // Set cache expiry to 1 hour from now
    res.json(response.data); // Send the fetched data to the client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handleMoviesRequest;
