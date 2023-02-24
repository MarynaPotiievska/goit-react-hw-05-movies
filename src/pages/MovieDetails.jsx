import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import { fetchMovieDetails } from 'api';
import MovieCard from 'components/MovieCard';
import BackLink from 'components/BackLink';
import AddInfoLinks from 'components/AddInfoLinks';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
      <BackLink location={backLinkHref} />
      {movieDetails && <MovieCard movieDetails={movieDetails} />}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <AddInfoLinks location={backLinkHref} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
