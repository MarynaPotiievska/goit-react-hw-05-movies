import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api';
import { Author, AuthorName, ReviewCard } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function gettingMovieReviews() {
      try {
        setIsLoading(true);
        const resp = await fetchMovieReviews(movieId);
        setReviews(resp);
      } catch (error) {
        setError('Sorry, something went wrong. Please, try again.');
      } finally {
        setIsLoading(false);
      }
    }
    gettingMovieReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <ReviewCard key={id}>
          <Author>
            Author: <AuthorName>{author}</AuthorName>
          </Author>
          <p>{content}</p>
        </ReviewCard>
      ))}
      {isLoading && <li>Loading...</li>}
      {error && <li>{error}</li>}
    </ul>
  );
};

export default Reviews;
