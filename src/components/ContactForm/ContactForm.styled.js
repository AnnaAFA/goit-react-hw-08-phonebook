import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  border-radius: 20px;
  margin: auto;
  margin-top: 50px;
  width: 300px;
  padding: 40px;
  background: linear-gradient(30deg, #8b59e7 10%, #4ec7e6 80%);
`;

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContactButton = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: 0;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 50px;
  background-color: white;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: #4ec7e6;
    border-color: black;
  }
`;

export const InputStyleContact = styled.input`
  padding: 7px;
  border-radius: 10px;
  width: 300px;
`;
