import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api';
import { ActorName, Character, CharacterCard, Photo } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function gettingMovieCast() {
      try {
        setIsLoading(true);
        const resp = await fetchMovieCast(movieId);
        setCast(resp);
      } catch (error) {
        setError('Sorry, something went wrong. Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    gettingMovieCast();
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ name, profile_path, cast_id, character }) => (
          <CharacterCard key={cast_id}>
            <Photo
              src={
                `https://www.themoviedb.org/t/p/w500/${profile_path}` ||
                'https://via.placeholder.com/100x50.jpg/A3A3A3?Text=There+is+no+photo'
              }
              alt={name}
            />
            <div>
              <ActorName>{name}</ActorName>
              <Character>Character: {character}</Character>
            </div>
          </CharacterCard>
        ))}
      {isLoading && <li>Loading</li>}
      {error && <li>{error}</li>}
    </ul>
  );
};

export default Cast;
