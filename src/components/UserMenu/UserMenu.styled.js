import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
  align-items: baseline;
`;

export const EmailStyle = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #8b59e7;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px white;
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

export const Home = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  margin-top: 100px;
  color: #8b59e7;
  font-size: 50px;
`;
