import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 150px;
  padding: 40px;
  background: linear-gradient(30deg, #8b59e7 10%, #4ec7e6 80%);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
`;

export const ListButton = styled.button`
  padding: 10px;
  background-color: #4ec7e6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #8b59e7;
  }
`;

export const ListItem = styled.li`
  border-radius: 10px;
  align-items: baseline;
  display: flex;
  flex-direction: row;
  background-color: white;
  gap: 20px;
  padding: 15px;
  margin: 0;
  font-size: 20px;
  justify-content: space-between;
`;

export const Name = styled.h3`
  margin: 0;
`;

export const NumberStyle = styled.p`
  margin: 0;
`;
export const Text = styled.p`
  font-size: 20px;
  color: white;
`;
