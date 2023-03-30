import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <div className={css.wrapper}>
      <span>Find contacts by name</span>
      <input
        onChange={changeFilter}
        value={filter}
        type="text"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};