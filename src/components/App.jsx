import { useState, useEffect } from 'react';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(localStorage.getItem(key) ?? [])
//   });
// }

export const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [contacts, setContacts] = useState(() =>
  //    JSON.parse(localStorage.getItem('contacts') ?? [])
  // );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
