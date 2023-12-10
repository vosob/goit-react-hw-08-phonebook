import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactsBookForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ContactsBookInput = styled(Field)`
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 25px;
  width: 300px;
  height: 35px;
  display: flex;
`;

export const Text = styled.p`
  padding-left: 20px;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #2a2a2a;
  font-weight: 600;
`;

export const SubmitBtn = styled.button`
  width: 300px;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid black;
  background-color: white;
  color: #2a2a2a;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const ValidationError = styled(ErrorMessage)`
  margin-left: 20px;
  color: red;
`;
