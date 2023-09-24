import styled from '@emotion/styled';

export const Wrap = styled.div`
  border-radius: 20px;
  margin: auto;
  margin-top: 50px;
  width: 500px;
  padding: 70px;
  background: linear-gradient(30deg, #8b59e7 10%, #4ec7e6 80%);
`;

export const Text = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  color: white;
`;

export const StyledForm = styled.form`
  text-align: left;
  margin-left: 90px;
`;

export const InputStyle = styled.input`
  padding: 7px;
  border-radius: 10px;
  width: 300px;
`;

export const BtnStyle = styled.button`
  display: block;
  margin-top: 40px;
  margin-left: 50px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 80px;
  border: 0;
  border-radius: 50px;
  background-color: white;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: #4ec7e6;
    border-color: black;
    transform: scale(1.2);
  }
`;
