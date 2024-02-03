import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Container, Btn, Text, Img } from './UserMenu.styled';
import dImg from 'dImg.png';
import { selectUserName } from '../../redux/auth/selectors';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <Container>
      <Text>Welcome, {userName}</Text>
      <Img src={dImg} alt="user-logo" />
      <Btn onClick={() => dispatch(logOut())} type="button">
        Logout
      </Btn>
    </Container>
  );
};
