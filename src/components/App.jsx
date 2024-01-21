import React, { useState, useEffect } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

export const App = () => {
  const LOCAL_STORAGE_KEY = 'contacts-list';

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setfiltter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = newContact => {
    const hasContact = contacts.some(
      ({ name }) =>
        name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const onDeleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const onFilterInput = value => {
    setfiltter(value.toLowerCase().trim());
  };

  const filterVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <PhoneBookForm onAddContact={onFormSubmit} />
      <Filter onChange={onFilterInput} />
      <Title>Contacts</Title>
      <Contacts contacts={filterVisibleContacts()} onDelete={onDeleteContact} />
    </div>
  );
};
