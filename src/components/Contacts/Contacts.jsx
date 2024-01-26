import { List, ListItem, DelBtn } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { useMemo } from 'react';

const Contacts = () => {
  const contacts = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);

  const dispatch = useDispatch();

  console.log(contacts);
  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => (
        <ListItem key={id}>
          {name} {number}
          <DelBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DelBtn>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
