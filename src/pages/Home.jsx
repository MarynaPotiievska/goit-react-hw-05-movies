import { fetchTrendingMovies } from 'api';
import Title from 'components/Title';
import MovieItem from 'components/MovieItem';
import { useEffect, useState } from 'react';

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
      <ul>
        {trendingMovies.map(movie => {
          const { title, id } = movie;
          return <MovieItem key={id} id={id} title={title} />;
        })}
      </ul>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </main>
  );
};

export default Home;
