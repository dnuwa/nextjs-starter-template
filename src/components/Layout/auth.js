import styled from 'styled-components';

export const Base = styled.div`
  background-color: ${({ theme }) => theme.colors['ui-background']};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors['ui-background']};
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
`;
