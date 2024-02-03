import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  ValidationError,
  LoginContainer,
  SubmitBtn,
  Input,
  Text,
  LoginForm,
} from './Login.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required!'),
  password: Yup.string()
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('This field is required!'),
});

const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Title>Log in to continue</Title>

      <LoginContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(value, helper) => {
            const { password, email } = value;
            dispatch(logIn({ email, password }));

            helper.resetForm({
              values: {
                email: '',
                password: '',
              },
            });
          }}
        >
          <LoginForm>
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
              <ValidationError name="username" component="span" />
            </label>

            <SubmitBtn type="submit">Log in</SubmitBtn>
          </LoginForm>
        </Formik>
      </LoginContainer>
    </>
  );
};

export default Login;
