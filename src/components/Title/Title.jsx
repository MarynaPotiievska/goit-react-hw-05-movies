import PropTypes from 'prop-types';
import { PageTitle } from './Title.styled';

const Title = ({ title }) => {
  return <PageTitle>{title}</PageTitle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
