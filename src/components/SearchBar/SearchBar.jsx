import PropTypes from 'prop-types';

import {
  ButttonBgImg,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { request } = e.target.elements;
    if (request.value.trim() === '') {
      return alert('Please, enter your request');
    }
    onSubmit(request.value);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        name="request"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <SearchFormButton>
        <span>
          <ButttonBgImg />
        </span>
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
