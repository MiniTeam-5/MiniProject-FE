import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Container = styled.div`
  margin-left: 300px;
  width: 100%;
  padding: 50px;
  background: ${({ theme }) => theme.color.background};
`;
