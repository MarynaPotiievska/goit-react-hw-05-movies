import { useEffect, useState } from 'react';

import { fetchMovieByName } from 'api';

import SearchBar from 'components/SearchBar';
import MovieItem from 'components/MovieItem';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('request');

  const handleSubmit = request => {
    setSearchParams({ request });
  };

  useEffect(() => {
    async function searchingMovies(movieTitle) {
      try {
        setIsLoading(true);
        const searchedMovies = await fetchMovieByName(movieTitle);
        setMovies(searchedMovies);
      } catch (error) {
        setError('Sorry, something went wrong. Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }

    if (!movieTitle) {
      return;
    } else {
      searchingMovies(movieTitle);
    }
  }, [movieTitle]);

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      <ul>
        {movies.map(movie => {
          const { title, id } = movie;
          return <MovieItem key={id} id={id} title={title} />;
        })}
      </ul>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </main>
  );
};

export default Movies;
