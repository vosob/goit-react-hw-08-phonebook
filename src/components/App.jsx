import React, { Component } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

const LOCAL_STORAGE_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) {
      this.setState({ contacts: storedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  onFormSubmit = newContact => {
    const hasContact = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  onFilterInput = value => {
    this.setState(() => ({
      filter: `${value.toLowerCase().trim()}`,
    }));
  };

  filterVisibleContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
  };

  render() {
    const visibleContacts = this.filterVisibleContacts();
    return (
      <div>
        <Title>Phonebook</Title>
        <PhoneBookForm onAddContact={this.onFormSubmit} />
        <Filter onChange={this.onFilterInput} />
        <Title>Contacts</Title>
        <Contacts contacts={visibleContacts} onDelete={this.onDeleteContact} />
      </div>
    );
  }
}

export default App;
