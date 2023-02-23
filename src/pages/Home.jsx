import { fetchTrendingMovies } from 'api';
import Title from 'components/Title';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function gettingTrendingMovies() {
      try {
        setIsLoading(true);
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        setError('Sorry, something went wrong. Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    gettingTrendingMovies();
  }, []);

  return (
    <main>
      <Title title="Trending today" />
      {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </main>
  );
};

export default Home;
