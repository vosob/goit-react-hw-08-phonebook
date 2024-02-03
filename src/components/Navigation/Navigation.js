import {
  HeaderLink,
  HeaderContainer,
  Link,
  HeaderTag,
  LinkContainer,
} from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoading);

  return (
    <>
      <HeaderTag>
        <HeaderContainer>
          <LinkContainer>
            <Link to="/">Your perfect Phone book</Link>
            <Link to="/contact">Contacts</Link>
          </LinkContainer>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <HeaderLink>
              <Link to="/register">Sign up</Link>
              <Link to="/logIn">Log in</Link>
            </HeaderLink>
          )}
        </HeaderContainer>
      </HeaderTag>
    </>
  );
};

export default Navigation;
