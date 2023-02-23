import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { fetchMovieDetails } from 'api';
import MovieCard from 'components/MovieCard';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  // console.log(movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from;

  useEffect(() => {
    console.log(movieId);
    async function gettingMovieDetails() {
      try {
        setIsLoading(true);
        const resp = await fetchMovieDetails(movieId);
        console.log(resp);
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
      <BackLink location={backLinkHref} />
      <MovieCard movieDetails={movieDetails} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </main>
  );
};

export default MovieDetails;
