import { useState } from 'react';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        <p>Немає такого варіанту</p>;
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({
      name: name,
      number: number,
      id: nanoid(),
    });

    setName('');
    setNumber('');
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          className={css.input}
          value={name}
          onChange={handleChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor="name">
        Number
        <input
          className={css.input}
          value={number}
          onChange={handleChangeInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button}>Add form</button>
    </form>
  );
};