import { useEffect, useState } from 'react';

import { fetchMovieByName } from 'api';

import SearchBar from 'components/SearchBar';
import MovieItem from 'components/MovieItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [request, setRequest] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = request => {
    setRequest(request);
  };

  useEffect(() => {
    async function searchingMovies(request) {
      try {
        setIsLoading(true);
        const searchedMovies = await fetchMovieByName(request);
        setMovies(searchedMovies);
      } catch (error) {
        setError('Sorry, something went wrong. Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }

    if (!request) {
      return;
    } else {
      searchingMovies(request);
    }
  }, [request]);

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
