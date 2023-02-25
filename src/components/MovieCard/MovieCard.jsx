import PropTypes from 'prop-types';

import Title from 'components/Title';
import {
  MovieCardBox,
  MovieInfoBox,
  MovieInfoTitle,
  MovieScoreBox,
  Poster,
} from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movieDetails;
  const releaseDate = new Date(release_date);
  const releaseYear = releaseDate.getFullYear();
  const genresArr = genres.map(genre => genre.name).join(' ');

  return (
    <MovieCardBox>
      <Poster
        src={
          poster_path
            ? `https://www.themoviedb.org/t/p/w500/${poster_path}`
            : 'https://via.placeholder.com/300x200.jpg/A3A3A3?Text=There+is+no+poster'
        }
        alt={title}
      />
      <div>
        <Title title={`${title} (${releaseYear})`} />
        <MovieScoreBox>
          {`User Score: ${Math.round(vote_average * 10)}%`}
        </MovieScoreBox>
        <MovieInfoBox>
          <MovieInfoTitle>Overview</MovieInfoTitle>
          <p>{overview}</p>
        </MovieInfoBox>
        <MovieInfoBox>
          <MovieInfoTitle>Genres</MovieInfoTitle>
          <p>{genresArr}</p>
        </MovieInfoBox>
      </div>
    </MovieCardBox>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
