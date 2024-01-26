import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

export const App = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <PhoneBookForm />
      <Filter />
      <Title>Contacts</Title>
      <Contacts />
    </div>
  );
};
