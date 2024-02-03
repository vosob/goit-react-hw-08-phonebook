import Filter from 'components/Filter/Filter';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import Contacts from '../../components/Contacts/Contacts';

const ContactsPage = () => {
  return (
    <>
      <PhoneBookForm />
      <Filter />
      <Contacts />
    </>
  );
};
export default ContactsPage;
