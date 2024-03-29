import styled from 'styled-components';

interface ContainerProps {
  // your other props here
  children: React.ReactNode;
}

export const Container = styled.button<ContainerProps>`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: 0.2s;

  &:hover {
    filter: opacity(0.8);
  }
`;
