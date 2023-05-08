import styled from 'styled-components';

export const AdminHome = styled.div`
  color: ${({ theme }) => theme.color.text};
  margin-bottom: 115px;
  img {
    width: 100%;
  }

  .flex {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const ApplicationStatus = styled.div`
  width: 100%;
  height: 420px;
  padding: 30px 40px 40px;
  border: 2px solid ${({ theme }) => theme.color.inputBorder};
  border-radius: 30px;
`;

export const Title = styled.div`
  margin-bottom: 23px;
  font-size: 24px;
  font-weight: 600;
`;

export const StatusTableWrap = styled.div`
  height: 296px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.inputBorder};
    border-radius: 5px;
  }

  * {
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.inputBorder};
    border-radius: 5px;
  }

  *::-moz-scrollbar {
    width: 8px;
  }

  *::-moz-scrollbar-track {
    /* background-color: #f1f1f1; */
  }

  *::-moz-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.inputBorder};
    border-radius: 5px;
  }
`;

export const StatusTable = styled.table`
  width: 100%;
  line-height: 30px;
  font-weight: 500;

  thead {
    line-height: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.color.inputBorder};
    margin-bottom: 20px;
  }

  th:nth-child(1) {
    width: 15%;
    min-width: 160px;
  }

  th:nth-child(2) {
    width: 15.15%;
    min-width: 100px;
  }

  th:nth-child(3) {
    width: 45%;
    min-width: 240px;
  }

  th:nth-child(4) {
    width: 24.24%;
    min-width: 160px;
  }

  tbody {
    tr {
      height: 50px;
      td {
        vertical-align: bottom;
        &:nth-child(2) {
          text-align: center;
        }
      }
      .staff_img {
        width: 30px;
        height: 30px;
        margin-right: 22px;
      }
    }
  }

  .btn_box {
    justify-content: center;
    button {
      width: 60px;
      height: 30px;
      background: ${({ theme }) => theme.color.status03};
      color: ${({ theme }) => theme.color.buttonText};
      border-radius: 10px;
      margin: 0 7px;
      &.refusal {
        background: ${({ theme }) => theme.color.status02};
      }
    }
  }
`;

export const ApplicationRight = styled.div`
  flex-shrink: 0;
  width: 300px;
  margin-left: 22px;
  text-align: center;
  font-weight: 600;
`;

export const Waiting = styled.div`
  height: 180px;
  padding: 32px 35px 42px;
  background: ${({ theme }) => theme.color.btnActiveBackground};
  border-radius: 30px;
  margin-bottom: 20px;
  p {
    font-size: 24px;
    margin-bottom: 43px;
  }

  strong {
    font-weight: 600;
    font-size: 40px;
  }
`;

export const Today = styled.div`
  height: 220px;
  padding: 30px 35px 35px;
  background: ${({ theme }) => theme.color.buttonActive};
  color: ${({ theme }) => theme.color.buttonText};
  border-radius: 30px;
  p {
    font-size: 70px;
    margin-bottom: 30px;
  }
  span {
    font-size: 50px;
  }
`;
