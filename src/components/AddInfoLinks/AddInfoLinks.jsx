import PropTypes from 'prop-types';
import {
  AddInfoLinksBox,
  AddInfoLinksTitle,
  StyledLink,
} from './AddInfoLinks.styled';

const AddInfoLinks = ({ location }) => {
  return (
    <AddInfoLinksBox>
      <AddInfoLinksTitle>Additional inrormation</AddInfoLinksTitle>
      <StyledLink to="cast" state={{ from: location }}>
        Cast
      </StyledLink>
      <StyledLink to="reviews" state={{ from: location }}>
        Reviews
      </StyledLink>
    </AddInfoLinksBox>
  );
};

AddInfoLinks.propTypes = {
  location: PropTypes.object.isRequired,
};
export default AddInfoLinks;
