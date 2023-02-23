import PropTypes from 'prop-types';

import Title from 'components/Title';

const MovieCard = ({ movieDetails }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movieDetails;
  const releaseDate = new Date(release_date);
  const releaseYear = releaseDate.getFullYear();
  const genresArr = genres.map(genre => genre.name).join(' ');

  return (
    <section>
      <img
        src={`https://www.themoviedb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <div>
        <Title title={`${title} (${releaseYear})`} />
        <p>
          <span>User Score: </span>
          <span>{vote_average}</span>
        </p>
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div>
          <h2>Genres</h2>
          <p>{genresArr}</p>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
