import PropTypes from 'prop-types';
import { FilmLink } from './MovieItem.styled';

const MovieItem = ({ id, title }) => {
  return (
    <li movieId={id}>
      <FilmLink to="/movies/:movieId">{title}</FilmLink>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieItem;
