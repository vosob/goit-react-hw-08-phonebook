import { Formik } from 'formik';
import {
  Text,
  Title,
  ValidationError,
  Input,
  SubmitBtn,
  RegisterForm,
  RegisterContainer,
} from './Register.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(3, 'To short!').required('This field is required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required!'),
  password: Yup.string()
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('This field is required!'),
});

const FormRegister = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Title>Sign up to continue</Title>
      <RegisterContainer>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={RegisterSchema}
          onSubmit={(value, helper) => {
            const { name, email, password } = value;
            dispatch(register({ name, email, password }));

            console.log('form', value);

            helper.resetForm({
              values: {
                name: '',
                email: '',
                password: '',
              },
            });
          }}
        >
          <RegisterForm>
            <label>
              <Text>User name:</Text>
              <Input type="text" name="name" placeholder="ExampleBoy" />
              <ValidationError name="name" component="span" />
            </label>

            <label>
              <Text>Email:</Text>
              <Input
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <ValidationError name="email" component="span" />
            </label>

            <label>
              <Text>Password:</Text>
              <Input
                type="password"
                name="password"
                placeholder="BestPassInWorld24"
              />
              <ValidationError name="password" component="span" />
            </label>

            <SubmitBtn type="submit">Create account</SubmitBtn>
          </RegisterForm>
        </Formik>
      </RegisterContainer>
    </>
  );
};

export default FormRegister;
