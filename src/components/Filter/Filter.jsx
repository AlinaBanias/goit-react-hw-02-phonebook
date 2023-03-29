import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <div className={css.wrapper}>
      <span>Find contacts by name</span>
      <input
        onInput={e => changeFilter(e.target.value)}
        value={filter}
        type="text"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};