import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Text = styled.p`
  padding-left: 20px;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #2a2a2a;
  font-weight: 600;
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 25px;
`;

export const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

export const ValidationError = styled(ErrorMessage)`
  margin-left: 20px;
  color: red;
`;

export const Input = styled(Field)`
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 25px;
  width: 325px;
  height: 35px;
  display: flex;
`;

export const SubmitBtn = styled.button`
  width: 325px;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid black;
  background-color: white;
  color: #2a2a2a;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    border-color: gray;
    color: gray;
  }
`;

export const RegisterContainer = styled.main`
  padding-top: 75px;
  display: flex;
  justify-content: center;
`;
