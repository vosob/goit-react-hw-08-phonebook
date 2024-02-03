import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ContactsBookForm,
  Text,
  ContactsBookInput,
  SubmitBtn,
  ValidationError,
  Title,
  ContactContainer,
} from './PhoneBookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactApi';
import { getIsLoading } from '../../redux/selectors';

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string().min(3, 'To short!').required('This field is required!'),
  number: Yup.string()
    .min(6, 'Too short!')
    .max(9, 'Too long!')
    .required('This field is required!'),
});

export const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(state => state.contact.contacts.items);

  return (
    <>
      <Title>Your PHONE BOOK</Title>
      <ContactContainer>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={PhoneBookSchema}
          onSubmit={(value, helper) => {
            const isAdded = contacts.some(
              contact =>
                contact.name.toLowerCase() === value.name.toLowerCase() ||
                contact.number === value.number
            );

            if (isAdded) {
              alert('The contact is already in contacts!');
              return;
            } else {
              dispatch(addContact(value));
            }

            helper.resetForm({
              values: {
                name: '',
                number: '',
              },
            });
          }}
        >
          <ContactsBookForm>
            <label>
              <Text>Name:</Text>
              <ContactsBookInput name="name" placeholder="Vlad" />
              <ValidationError name="name" component="span" />
            </label>

            <label>
              <Text> Number:</Text>
              <ContactsBookInput
                type="text"
                name="number"
                placeholder="111-11-11"
              />
              <ValidationError name="number" component="span" />
            </label>
            <SubmitBtn disabled={isLoading} type="submit">
              Add contact
            </SubmitBtn>
          </ContactsBookForm>
        </Formik>
      </ContactContainer>
    </>
  );
};
