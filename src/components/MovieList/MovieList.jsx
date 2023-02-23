// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FilmLink } from './MovieList.styled';

const MovieItem = ({ movies }) => {
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

// MovieItem.propTypes = {
//   // id: PropTypes.number.isRequired,
//   // title: PropTypes.string.isRequired,
// };

export default MovieItem;
