import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, id, removeContact }) => {
  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button
        className={css.delete}
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};