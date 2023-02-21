import PropTypes from 'prop-types';

import { BsSearch } from 'react-icons/bs';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="request"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button>
          <span>
            <BsSearch />
          </span>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
