import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FilmLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, name, id }) => (
        <li key={id}>
          <FilmLink to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </FilmLink>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
