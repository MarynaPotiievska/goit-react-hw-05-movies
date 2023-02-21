import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FilmLink } from './MovieItem.styled';

const MovieItem = ({ id: movieId, title }) => {
  const location = useLocation();
  const isLocationFromHome = location.pathname === '/';

  return (
    <li id={movieId}>
      {isLocationFromHome ? (
        <FilmLink to={`movies/${movieId}`} state={{ from: location }}>
          {title}
        </FilmLink>
      ) : (
        <FilmLink to={`${movieId}`} state={{ from: location }}>
          {title}
        </FilmLink>
      )}
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieItem;
