// src/pages/api/movies.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handleMoviesRequest = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (!req.query) {
    return res.status(400).json({ error: 'No query parameters provided' });
  }

  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const response = await axios.get(
      'https://imdb8.p.rapidapi.com/title/v2/find',
      {
        params: { title: query, limit: '20', sortArg: 'moviemeter,asc' },
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
      },
    );

    if (response.data) {
      res.json(response.data);
    } else {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } catch (error) {
    console.error(error); // Log the error object to see more details
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handleMoviesRequest;
