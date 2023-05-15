import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 1440px;
`;

export const Container = styled.div`
  position: relative;
  margin-left: 300px;
  width: 100%;
  padding: 50px 70px;
  background: ${({ theme }) => theme.color.background};
`;
