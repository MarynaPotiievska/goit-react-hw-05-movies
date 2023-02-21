import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import { fetchMovieDetails } from 'api';
import MovieCard from 'components/MovieCard';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function gettingMovieDetails() {
      try {
        setIsLoading(true);
        const resp = await fetchMovieDetails(movieId);
        setMovieDetails(resp);
      } catch (error) {
        setError('Sorry, something went wrong. Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    gettingMovieDetails();
  }, [movieId]);

  return (
    <main>
      <p>
        <HiOutlineArrowNarrowLeft />
        <span>Go back</span>
      </p>
      <MovieCard movieDetails={movieDetails} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </main>
  );
};

export default MovieDetails;
