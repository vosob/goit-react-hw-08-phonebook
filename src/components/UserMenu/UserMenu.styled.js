import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 20px;
`;

export const Text = styled.div`
  font-size: 22px;
`;

export const Img = styled.img`
  width: 40px;
`;

export const Btn = styled.button`
  color: #2a2a2a;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  &:hover {
    outline: 2px solid gray;
  }
`;
