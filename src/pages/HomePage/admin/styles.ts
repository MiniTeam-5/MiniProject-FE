import styled from 'styled-components';

export const AdminHome = styled.div`
  color: ${({ theme }) => theme.color.text};
  margin-bottom: 115px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .flex {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
