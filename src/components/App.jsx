import { useState } from 'react';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { useLocalStorage } from '../customHooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  const AddingContact = contact => {
    setContacts([...contacts, contact]);
  };

  const changeFIlter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContacts = contactId => {
    setContacts(contacts.filter(el => el.id !== contactId));
  };

  const visibleContact = getVisibleContact();

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm add={AddingContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFIlter} />
        <ContactList
          visibleContact={visibleContact}
          deleteContacts={deleteContacts}
        />
      </div>
    </>
  );
};
