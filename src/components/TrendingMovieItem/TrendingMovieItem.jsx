import PropTypes from 'prop-types';
import { FilmLink } from './TrendingMovieItem.styled';

const TrendingMovieItem = ({ id, title }) => {
  return (
    <li movieId={id}>
      <FilmLink to="/movies/:movieId">{title}</FilmLink>
    </li>
  );
};

TrendingMovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TrendingMovieItem;
