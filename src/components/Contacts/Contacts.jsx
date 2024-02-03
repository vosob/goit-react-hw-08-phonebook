import { List, ListItem, DelBtn, ContactContainer } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contactApi';
import { useEffect, useMemo } from 'react';
import { getIsLoading } from '../../redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(state => state.contact.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);

  return (
    <>
      <ContactContainer>
        <List>
          {filteredContacts.map(({ name, id, number, phone }) => (
            <ListItem key={id}>
              {name} {number}
              <DelBtn
                disabled={isLoading}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DelBtn>
            </ListItem>
          ))}
        </List>
      </ContactContainer>
    </>
  );
};

export default Contacts;
