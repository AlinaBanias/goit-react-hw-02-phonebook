import { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LOCAL_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number, id }) => {
    const contact = { id, name, number };

    contacts.find(contact => contact.name === name)
      ? alert(`${contact.name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, contact]);
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const removeContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm handleAddContact={handleAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          removeContact={removeContact}
        />
      </Section>
    </>
  );
};