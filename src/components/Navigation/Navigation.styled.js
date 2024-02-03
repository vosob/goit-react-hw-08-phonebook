import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100px;
  width: 100%;

  color: white;
  background-color: tomato;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1280px;
`;

export const MainTitle = styled.p`
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
`;

export const HeaderLink = styled.ul`
  display: flex;
  margin-left: auto;
  /* padding-right: 300px; */
  gap: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
