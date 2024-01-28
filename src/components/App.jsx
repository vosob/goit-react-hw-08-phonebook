import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';
import DotsLoader from './DotsLoader/DotsLoader';
export const App = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <PhoneBookForm />
      <Filter />
      <Title>
        Contacts
        <DotsLoader />
      </Title>
      <Contacts />
    </div>
  );
};
