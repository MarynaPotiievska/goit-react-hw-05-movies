import PropTypes from 'prop-types';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

const BackLink = ({ location }) => {
  return (
    <StyledLink to={location}>
      <HiOutlineArrowNarrowLeft />
      <span>Go back</span>
    </StyledLink>
  );
};

BackLink.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BackLink;
