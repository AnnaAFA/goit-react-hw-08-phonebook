import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
`;

export const EmailStyle = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const BtnLogout = styled.button`
  font-size: 16px;
  margin-right: 20px;
  border-radius: 50px;
  background-color: transparent;
  padding: 0;
  transition: all 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    color: white;
    border-color: black;
  }
`;
